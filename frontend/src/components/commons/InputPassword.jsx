import EyeIcon from "../icons/EyeIcon";
import EyeSlashIcon from "../icons/EyeSlashIcon";
import { useState } from "react";

export default function InputPassword ({ label, name, value, placeholder, onChange, className }) {

    const [show, setShow] = useState(false)

  return (
    <div className={`w-full mb-3 flex flex-col  ${className}`}>
        <label className='mb-1'>{label}</label>
        <div className="flex items-center w-full rounded-md border text-black bg-gray-100 border-gray-300">
            <input
                name={name}
                type={show ? "text" : "password"}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className="w-full rounded-md border border-slate-50 px-4 py-2 bg-gray-100  focus:outline-none focus:border-primary"
            />
            <span className="mx-2 hover:cursor-pointer" onClick={() => setShow(!show)}>
                {
                    show ? <EyeIcon /> : <EyeSlashIcon />
                }
            </span>
        </div>
    </div>
  );
};