export default function AlertSuccess({ message }) {
    return (
        <div className="w-full px-4 py-2 rounded-md border font-bold border-success bg-green-100 text-success mb-3">
            {message}
        </div>
    );
}