import EyeIcon from "../icons/EyeIcon";
import EyeSlashIcon from "../icons/EyeSlashIcon";
import { useState } from "react";

export default function Input ({ label, type, name, value, placeholder, onChange, error, className }) {

    const [show, setShow] = useState(false)

  return (
    <div className={`w-full mb-4 flex flex-col  ${className}`}>
        <label className='mb-2'>{label}</label>
        <div className="relative text-black">
            <input
                name={name}
                type={show ? "text" : type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={`w-full rounded-md border border-blue-950 px-4 py-2 bg-slate-200 focus:outline-none focus:border-primary ${error && "border-danger"}`}
            />
            {
                type === "password" && 
                <span className="absolute right-2 top-2 hover:cursor-pointer" onClick={() => setShow(!show)}>
                    {
                        show ? <EyeIcon /> : <EyeSlashIcon />
                    }
                </span>
            }
        </div>
        {error && <span className="text-danger">{error}</span>}
    </div>
  );
};