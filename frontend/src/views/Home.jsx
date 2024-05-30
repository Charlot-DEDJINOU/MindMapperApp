import QuestionsData from "../data/QuestionsData"
import InputQuestion from "../components/InputQuestion"
import Button from '../components/commons/Button'
import { useContext, useEffect, useState } from "react";
import { getQuestions } from "../services/questionService";
import { getResponse, updateResponse } from "../services/responseService";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/context";
import ValideCheck from "../components/icons/ValideCheck";

export default function Home() {

    const { id_link } = useParams()
    const { toggleUser } = useContext(UserContext)

    const [loading, setLoading] = useState(false)
    const [saving, setSaving] = useState(false)
    const [bye, setBye] = useState({ state : false , type : ''})
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(false)
    const [questions, setQuestions] = useState([]);
    const [data, setData] = useState({})
    const [currentIndex, setIndex] = useState(0)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.checked
        })
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        await sendData("COMPLETED")
        setLoading(false)
        setBye({
            state : true,
            type : "COMPLETED"
        })
    }

    const saveData = async () => {
        setSaving(true)
        await sendData("PENDING")
        setSaving(false)
        setBye({
            state : true,
            type : "PENDING"
        })
    }

    const sendData = async (status) => {
        const newResponse = {
            ...response,
            status : status,
            content : status === "PENDING" ? removeNullValues({...data}) : data
        }
        try{
            await updateResponse(id_link, newResponse)
        }catch(e){
            setError(true)
        }
    }

    function removeNullValues(obj) {
        for (let key in obj) {
          if (obj[key] === null) {
            delete obj[key];
          }
        }
        return obj;
      }

    useEffect(() => {
        const fetchQuestions = async () => {
            let questionsData = [];
            let questionsSave = {};

            try{
                questionsData = await getQuestions()
                const response = await getResponse(id_link)
                setResponse(response)
                toggleUser(response.user_id)
                questionsSave = response.content || questionsSave
            }catch(e){
                setError(true)
            }
            
            var result = [];

            for (var id in questionsSave) {
                var question = questionsData.find(q => q.identifiant === id);
                if (question) {
                    result.push({
                        identifiant: question.identifiant,
                        content: question.content,
                        value: questionsSave[id]
                    });
                }
            }

            setIndex(result.length)

            questionsData.forEach(function (question) {
                if (!questionsSave.hasOwnProperty(question.identifiant)) {
                    result.push({
                        identifiant: question.identifiant,
                        content: question.content,
                        value: null
                    });
                }
            });

            setQuestions(result)

            var finalQuestionValues = {};

            for (var key in questionsSave) {
                finalQuestionValues[key] = questionsSave[key];
            }

            questionsData.forEach(question => {
                if (!(question.identifiant in questionsSave)) {
                    finalQuestionValues[question.identifiant] = null;
                }
            });
            
            setData(finalQuestionValues)
        };

        fetchQuestions();
    }, []);

    const nextQuestion = () => {
        const questionsArray = Object.entries(data)
        const [currentKey, currentValue] = questionsArray[currentIndex]
        if(currentValue === null) return
        else setIndex(currentIndex + 1)
    };

    const prevQuestion = () => {
       if(currentIndex > 0)
            setIndex(currentIndex - 1)
    }

    if (error) {
        return <div className="text-danger font-bold text-xl text-center">Une erreur s'est produite. Veuillez réessayer plus tard</div>;
    }

    if(response?.status === "COMPLETED"){
        return(
            <div className="font-bold text-xl text-center text-danger">
                Ce lien est expiré
            </div>
        )
    }
    
    if(questions.length > 0 && bye.state === false) {
        return(
            <section id="home">
                <div className="bg-white p-10 rounded-md mx-2">
                    <div className="flex items-end justify-between">
                        <span className="block text-primary font-bold">Question N° {currentIndex + 1}</span>
                        <Button onClick={saveData} isLoading={saving}>Enregistrer</Button>
                    </div>
                    <form className="w-full md:w-[500px] mt-5" onSubmit={handleSubmit}>
                        {
                            questions.map((question, index) => (
                                <div key={index} hidden={index != currentIndex}>
                                    <InputQuestion
                                        question={question}
                                        onChange={handleChange}
                                        responses={data}
                                    />
                                </div>
                            ))
                        }
                        <div className="flex justify-between mt-5">
                            <span onClick={prevQuestion} className="text-white bg-bodydark2 w-30 py-2 px-3 rounded-md flex flex-row items-center justify-center hover:cursor-pointer">
                                Précedente
                            </span>
                            {
                                currentIndex + 1 == questions.length ?
                                <Button isLoading={loading}>Envoyer</Button> : 
                                <span onClick={nextQuestion} className="text-white bg-success w-30 py-2 px-3 rounded-md flex flex-row items-center justify-center hover:cursor-pointer">
                                    Suivante
                                </span> 
                            }
                        </div>
                    </form>
                </div>
            </section>
        )
    }

    if(questions.length > 0 && bye.state === true){
        return(
            <div className="w-96 flex flex-col items-center justify-center bg-white text-black text-lg p-10 rounded-md mx-2 text-center">
                <ValideCheck />
                { bye.type === "COMPLETED" && <p className="mt-3">Réponse envoyé avec succés. Votre resultats vous serait envoyé</p>}
                { bye.type === "PENDING" && <p className="mt-3">Réponse enregistré avec succés. N'oubliez pas de compléter cela dans les trois prochains Jours</p>}
            </div>
        )
    }

    return (
        <div role="status" className="w-full flex items-center justify-center">
            <svg aria-hidden="true" className="inline w-25 h-25 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
        </div>
    )
}