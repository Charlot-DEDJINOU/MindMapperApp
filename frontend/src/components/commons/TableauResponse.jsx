import InvalidateCheck from "./InvalidateCheck";
import ValideCheck from "./ValideCheck";

/* eslint-disable react/prop-types */

export default function TableauResponse({ questions }){
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border-2">
                <thead>
                    <tr className="bg-gray-100 border-2">
                        <th className="border border-gray-400 px-4 py-2 border-2">Questions</th>
                        <th className="border border-gray-400 px-4 py-2 border-2">Oui</th>
                        <th className="border border-gray-400 px-4 py-2 border-2">Non</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questions.map((question, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                                <td className="border border-gray-400 px-4 py-2 border-2">{question.text}</td>
                                <td className="border border-gray-400 px-4 py-2 border-2">
                                    {
                                        question.answer === 'oui' ? <ValideCheck /> : ''
                                    }
                                </td>
                                <td className="border border-gray-400 px-4 py-2 border-2">
                                    {
                                        question.answer === 'non' ? <InvalidateCheck /> : ''
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