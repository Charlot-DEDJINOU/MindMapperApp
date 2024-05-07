export default function InputCheck({type, label, name, value, className}) {
    return(
        <div className="flex items-center">
            <input type={type} name={name} value={value} className="block w-5 h-5 bg-primary rounded-md"/>
            <span className={`block mx-2 font-bold ${className}`}>{label}</span>
        </div>
    )
}