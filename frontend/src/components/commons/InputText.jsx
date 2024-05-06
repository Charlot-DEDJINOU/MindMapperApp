export default function InputText ({ label, type, name, value, placeholder, onChange, className }) {
  return (
    <div className={`w-full mb-3 flex flex-col  ${className}`}>
        <label className='mb-1'>{label}</label>
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className="w-full px-4 py-2 rounded-md border text-black bg-gray-100 border-gray-300 focus:outline-none focus:border-primary"
        />
    </div>
  );
};