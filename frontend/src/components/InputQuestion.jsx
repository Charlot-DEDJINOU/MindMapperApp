import ToggleOffIcon from "./icons/ToogleOffIcon";
import ToggleOnIcon from "./icons/ToggleOnIcon";
import { useState } from "react"

export default function InputQuestion({question, error, value}) {

    const [isChecked, setIsChecked] = useState(value == 0 ? null : value);

    const handleSwitch = (state) => {
        if(isChecked == null) setIsChecked(state)
        else setIsChecked(!isChecked)

        document.getElementById(question.identifiant).click();
    };

    return (
        <div className="w-full text-center p-3 shadow-lg border rounded-lg">
            <p className="text-lg text-black">
                {question.content}
            </p>
            <div className="flex justify-evenly mt-5">
                <div className="flex items-center">
                    <span 
                        className={`hover:cursor-pointer ${isChecked ? 'text-primary' : 'text-blueGray-900'}`} 
                        onClick={() => handleSwitch(true)}
                    >
                        {isChecked ? <ToggleOnIcon size={30} /> : <ToggleOffIcon size={30} />}
                    </span>
                    <span className="block mx-2 text-green-600 font-bold">OUI</span>
                </div>
                <div className="flex items-center">
                    <span 
                        className={`hover:cursor-pointer ${isChecked != null && !isChecked ? 'text-primary' : 'text-blueGray-900'}`} 
                        onClick={() => handleSwitch(false)}
                    >
                        {isChecked != null && !isChecked ? <ToggleOnIcon size={30} /> : <ToggleOffIcon size={30} />}
                    </span>
                    <span className="block mx-2 text-red-600 font-bold">NON</span>
                </div>
                <input type="checkbox" name={question.identifiant} value={value} onChange={onChange} hidden/>
                {error && <span className="text-danger">{error}</span>}
            </div>
        </div>
    );
}