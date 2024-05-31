import ToggleOffIcon from "../icons/ToogleOffIcon"
import ToggleOnIcon from "../icons/ToggleOnIcon"
import { useState } from "react"

export default function InputCheck({type, label, name, value, onChange, error, className}) {

    const [switched , setSwitched] = useState(value);

    const handdleSwitched = () => {
        setSwitched(!switched)
        document.getElementById(name).click()
    }

    return(
        <div className="flex items-center mb-3">
            <span className={`hover:cursor-pointer ${switched ? 'text-primary' : 'text-blueGray-900'}`} onClick={handdleSwitched}>
                {
                    switched ? <ToggleOnIcon /> : <ToggleOffIcon />
                }
            </span>
            <span className={`block mx-2 ${className} ${error && 'text-danger'}`}>{error ? error : label}</span>
            <input id={name} type={type} name={name} value={value} onChange={onChange} hidden/>
        </div>
    )
}