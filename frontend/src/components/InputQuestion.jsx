import InputCheck from "./commons/InputCheck"

export default function InputQuestion(question) {
    return(
        <div className="w-full text-center p-3 shadow-lg border rounded-lg">
            <p className="text-lg">
                {question.content}
            </p>
            <div className="flex justify-evenly mt-5">
                <InputCheck 
                    type="radio"
                    name={question.identifiant}
                    label="OUI"
                    value="OUI"
                    className="text-secondary"
                />
                <InputCheck 
                    type="radio"
                    name={question.identifiant}
                    label="NON"
                    value="NON"
                    className="text-red-900"
                />
            </div>
        </div>
    )
}