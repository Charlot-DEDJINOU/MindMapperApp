import { useState, useEffect } from "react";
import InvalidateCheck from "./icons/InvalidateCheck";
import ValideCheck from "./icons/ValideCheck";
import { getQuestions} from "../services/questionService";

export default function TableauResponse({ userAnswer }){
    const [responses, setResponse] = useState(userAnswer)
    const [questions, setQuestion] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetctData = async () => {
        try {
          const questionsData = await getQuestions();
          setQuestion(questionsData);
        } catch (e) {
          setError(e);
          console.error(e);
        }
      };
      
      fetctData();
    }, []);

    useEffect(() => setResponse(userAnswer), [userAnswer])
  
    if (error) {
      return <div>Erreur lors du chargement des qquestions : {error.message}</div>;
    }
  
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border-2 text-center">
                <thead>
                    <tr className="bg-gray-100 border-2">
                        <th className="border-gray-400 px-4 py-2 border-2">Identifiants</th>
                        <th className="border-gray-400 px-4 py-2 border-2">Questions</th>
                        <th className="border-gray-400 px-4 py-2 border-2">Oui</th>
                        <th className="border-gray-400 px-4 py-2 border-2">Non</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map((question, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                                <td className="border-gray-400 px-4 py-2 border-2">{question.identifiant}</td>
                                <td className="border-gray-400 px-4 py-2 border-2">{question.content}</td>
                                <td className="border-gray-400 px-4 py-2 border-2">
                                    {
                                        responses[question.identifiant] === true ? <ValideCheck /> : ''
                                    }
                                </td>
                                <td className="border-gray-400 px-4 py-2 border-2">
                                    {
                                        responses[question.identifiant] === false ? <InvalidateCheck /> : ''
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}