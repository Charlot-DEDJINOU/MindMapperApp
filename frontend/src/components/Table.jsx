import Button from "./commons/Button"
import Input from "./commons/Input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Table({
    headColumns = [], bodyColumns = [], data = [], actions = []
}) {

    const navigate = useNavigate()
    const [items, setItems] = useState(data)

    const search = (e) => {
        const text = e.target.value.toLowerCase()
        setItems(data.filter((item) => {
            for(let i = 0; i < bodyColumns.length; i++){
                if(item[bodyColumns[i]].toLowerCase().includes(text))
                    return true
            }

            return false
        }))
    }

    return(
        <div className="w-full h-full border overflow-y-scroll">
            <Input placeholder="Rechercher" onChange={search} className="fixed"/>
            <table className="border-collapse text-center w-full h-full mt-14 border">
                <thead className="bg-secondary text-white">
                    <tr>
                        {
                            headColumns.map((item, index) => (
                                <th key={index} className="border border-slate-300 p-2">{item.toUpperCase()}</th>
                            ))
                        }
                        {actions.length > 0 && <th className="border border-slate-300 p-2">ACTIONS</th>}
                    </tr>
                </thead>
                <tbody>
                    {
                        items.length > 0 ?
                        items.map((item, indexItem) => (
                            <tr key={indexItem}>
                                {
                                    bodyColumns.map((key, indexKey) => (
                                        <td key={indexKey} className="border border-slate-300 p-2">{item[key]}</td>
                                    ))
                                }

                                {
                                    actions.length > 0 && 
                                    <td className="border border-slate-300 p-2 flex items-center justify-around">
                                        {
                                            actions.map((action, index) => (
                                                <Button onClick={() => navigate(`${action.url}/${item.id}`)} className={action.className} key={index}>{action.name}</Button>
                                            ))
                                        }
                                    </td>
                                }
                            </tr>
                        )) :
                        <tr>
                            <td colSpan={actions.length > 0 ? bodyColumns.length + 1 : bodyColumns.length} className="text-xl font-bold">Aucun resultat trouvé</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}