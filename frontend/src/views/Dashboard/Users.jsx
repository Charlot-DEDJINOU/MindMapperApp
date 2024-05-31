import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { getUsers } from "../../services/userService";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const headColumns = ["Nom", "Prenom", "Email", "Téléphone"];
  const bodyColumns = ["lastname", "firstname", "email", "phone"];
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    };

    fetchUsers();
  }, []);

  const edit = (item) => {
    localStorage.setItem('data', JSON.stringify(item))
    navigate('/dashboard/user/update')
  }

  if (error) {
    return <div>Erreur lors du chargement des utilisateurs : {error.message}</div>;
  }

  return (
    <Table
      headColumns={headColumns}
      bodyColumns={bodyColumns}
      data={users}
      actions={true}
      addFunction={() => navigate('/dashboard/user/create')}
      editFunction={edit}
    />
  );
}