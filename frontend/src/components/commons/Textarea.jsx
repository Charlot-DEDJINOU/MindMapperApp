export default function Textarea ({ label, name, value, placeholder, onChange, error, className, disabled }) {

  return (
    <div className={`w-full mb-4 flex flex-col  ${className}`}>
        <label className='mb-2'>{label}</label>
        <div className="relative text-black">
            <textarea
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={disabled}
                className={`w-full resize-y min-h-60 rounded-md border border-blue-950 px-4 py-2 bg-slate-200 focus:outline-none focus:border-primary ${error && "border-danger"}`}
            ></textarea>
        </div>
        {error && <span className="text-danger">{error}</span>}
    </div>
  );
};