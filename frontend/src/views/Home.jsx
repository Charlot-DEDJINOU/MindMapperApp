import QuestionsData from "../data/QuestionsData"
import InputQuestion from "../components/InputQuestion"
import Button from '../components/commons/Button'
import { useEffect, useState } from "react";
import QuestionsSave from "../data/QuestionsSave";

export default function Home() {

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
        e.preventDefault()
        await sendData("COMPLETED")
    }

    const sendData = async (status) => {
        
    }

    useEffect(() => {
        const fetchQuestions = async () => {
            const questionsData = QuestionsData();
            const questionsSave = JSON.parse(QuestionsSave() || '{}');
            
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
        console.log(questionsArray)
        const [currentKey, currentValue] = questionsArray[currentIndex]
        if(currentValue === null) return
        else setIndex(currentIndex + 1)
    };

    const prevQuestion = () => {
       if(currentIndex > 0)
            setIndex(currentIndex - 1)
    }

    return(
        <section id="home">
            <div className="bg-white p-10 rounded-md mx-2">
                <div className="flex items-end justify-between">
                    <span className="block text-primary font-bold">Question N° {currentIndex + 1}</span>
                    <Button onClick={() => sendData("PENDING")}>Enregistrer</Button>
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
                            <Button>Envoyer</Button> : 
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