import Table from "../../components/Table"
import UsersData from "../../data/UsersData"

export default function Users(){

    const headColumns = ["Nom", "Prenom", "Email", "Téléphone"]
    const bodyColumns = ["last_name", "first_name", "email", "phone"]

    return(
        <Table
            headColumns={headColumns}
            bodyColumns={bodyColumns}
            data={UsersData()}
        />
    )
}