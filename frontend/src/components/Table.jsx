import Button from "./commons/Button"
import Input from "./commons/Input"
import { useState } from "react"
import AddIcon from "./icons/AddIcon"
import EditIcon from "./icons/EditIcon"
import TrashIcon from "./icons/TrashIcon"

export default function Table({
    headColumns = [], bodyColumns = [], data = [], model_url = "", actions = false, addFunction,  onClick, editFunction, deletedFunction, className
}) {

    const [items, setItems] = useState(data)

    const search = (e) => {
        const text = e.target.value.toLowerCase()
        setItems(data.filter((item) => {
            for(let i = 0; i < bodyColumns.length; i++){
                if(item[bodyColumns[i]].toString().toLowerCase().includes(text))
                    return true
            }

            return false
        }))
    }

    return(
        <div className={`w-full h-full overflow-y-scroll ${className}`}>
            <div className="flex items-center justify-around">
                <Input placeholder="Rechercher" onChange={search} />
                {
                    addFunction &&
                    <Button className="w-32 ml-5 mb-2" onClick={addFunction}>
                        <AddIcon />
                        <span className="ml-2">Nouveau</span>
                    </Button>
                }
            </div>
            <table className="border-collapse text-center w-full h-full border">
                <thead className="bg-primary text-white">
                    <tr>
                        {
                            headColumns.map((item, index) => (
                                <th key={index} className="border border-slate-300 p-2">{item.toUpperCase()}</th>
                            ))
                        }
                        {
                            actions && <th className="border border-slate-300 p-2">ACTIONS</th>
                        }
                    </tr>
                </thead>
                <tbody className="text-black dark:text-white">
                    {
                        items.length > 0 ?
                        items.map((item, indexItem) => (
                            <tr key={indexItem} onClick={() => onClick(item.id)} className={onClick && "hover:cursor-pointer"}>
                                {
                                    bodyColumns.map((key, indexKey) => (
                                        <td key={indexKey} className="border border-slate-300 p-2">{item[key]}</td>
                                    ))
                                }

                                { actions &&
                                <td className="border border-slate-300 p-2 flex items-center justify-around">
                                    <Button className="bg-green-700" onClick={() => editFunction(item.id)}>
                                        <EditIcon />
                                    </Button>
                                    <Button className="bg-danger" onClick={() => deletedFunction(item.id)}>
                                        <TrashIcon />
                                    </Button>
                                </td>
                                }
                            </tr>
                        )) :
                        <tr>
                            <td colSpan={headColumns.length + 1} className="text-xl font-bold">Aucun resultat trouvé</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}