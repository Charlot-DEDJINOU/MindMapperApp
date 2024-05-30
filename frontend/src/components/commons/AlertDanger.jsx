export default function AlertDanger({message}) {
    return(
        <div className="w-full px-4 py-2 rounded-md border font-bold border-danger bg-[#e6b7b7] text-danger mb-3">{message}</div>
    )
}