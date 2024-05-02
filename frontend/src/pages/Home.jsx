import Table from "../components/Table"
import UsersData from "../data/UsersData"

export default function Home() {

    const headColumns = ["Prenom", "Nom", "Numéro", "Email"]
    const bodyColumns = ["first_name", "last_name", "phone", "email"]
    const actions = [
        {
            name : "Voir plus",
            url : "/user"
        }
    ]

    return(
        <section id="home">
           <Table 
                headColumns={headColumns}
                bodyColumns={bodyColumns}
                data={UsersData()}
                actions={actions}
           />
        </section>
    )
}