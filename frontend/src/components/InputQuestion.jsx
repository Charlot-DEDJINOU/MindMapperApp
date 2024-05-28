import ToggleOffIcon from "./icons/ToogleOffIcon";
import ToggleOnIcon from "./icons/ToggleOnIcon";
import { useEffect, useState } from "react";

export default function InputQuestion({ question, responses, onChange }) {
    const [isChecked, setIsChecked] = useState(question.value);

    const handleSwitch = (state) => {
        if (isChecked == null) setIsChecked(state);
        else setIsChecked(!isChecked);
    };

    useEffect(() => {
        const ele = document.getElementById(question.identifiant);
        if (ele) {
            if (isChecked === true && !ele.checked) ele.click();
            else if (isChecked === false && ele.checked) ele.click();
            else if (isChecked === false && !ele.checked) {
                ele.click();
                ele.click();
            }
        }
    }, [isChecked]);

    return (
        <div className="w-full text-center p-3 shadow-lg border rounded-lg">
            <p className="text-lg text-black">
                {question.content}
            </p>
            <div className="flex justify-evenly mt-5">
                <div className="flex items-center">
                    <span
                        className={`hover:cursor-pointer ${isChecked !== null && isChecked === false ? 'text-primary' : 'text-blueGray-900'}`}
                        onClick={() => handleSwitch(false)}
                    >
                        {isChecked !== null && isChecked === false ? <ToggleOnIcon size={30} /> : <ToggleOffIcon size={30} />}
                    </span>
                    <span className="block mx-2 text-red-600 font-bold">NON</span>
                </div>
                <div className="flex items-center">
                    <span
                        className={`hover:cursor-pointer ${isChecked ? 'text-primary' : 'text-blueGray-900'}`}
                        onClick={() => handleSwitch(true)}
                    >
                        {isChecked ? <ToggleOnIcon size={30} /> : <ToggleOffIcon size={30} />}
                    </span>
                    <span className="block mx-2 text-green-600 font-bold">OUI</span>
                </div>
                <input type="checkbox" id={question.identifiant} name={question.identifiant} onChange={onChange} defaultChecked={isChecked || false} hidden/>
            </div>
            {responses[question.identifiant] === null && <span className="text-danger block mt-3">Veuillez choisir une option</span>}
        </div>
    );
}