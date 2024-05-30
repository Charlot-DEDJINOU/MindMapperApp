import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { getPersonalities } from "../../services/personalityService";

export default function Personalites() {
  const headColumns = ["Numéro", "Description"];
  const bodyColumns = ["name", "description"];
  const [personalites, setPersonalites] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPersonalites = async () => {
      try {
        const response = await getPersonalities();
        setPersonalites(response);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    };

    fetchPersonalites();
  }, []);

  const edit = (item) => {
    localStorage.setItem('data', JSON.stringify(item))
    navigate('/dashboard/personality/update')
  }

  if (error) {
    return <div>Erreur lors du chargement des utilisateurs : {error.message}</div>;
  }

  return (
    <Table
      headColumns={headColumns}
      bodyColumns={bodyColumns}
      data={personalites}
      actions={true}
      addFunction={() => navigate('/dashboard/personality/create')}
      editFunction={edit}
    />
  );
}