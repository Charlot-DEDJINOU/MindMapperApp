import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { getResponses } from "../../services/responseService";
import { formatDate } from "../../utils/utils";

export default function Questions() {
  // Définition des colonnes de l'en-tête et du corps du tableau
  const headColumns = ["Nom", "Prenom", "Phone", "Status", "Personality", "Date"];
  const bodyColumns = ["lastname", "firstname", "phone", "status", "id_personality", "date"];

  // États pour les réponses et les erreurs
  const [response, setResponses] = useState([]);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  function flattenUserId(array) {
    return array.map(item => {
      let userData = { ...item.user_id };
      return { ...item, ...userData, date: formatDate(item.date) };
    });
  }

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const res = await getResponses();
        setResponses(() => flattenUserId(res));
      } catch (e) {
        setError(e);
        console.error(e);
      }
    };

    fetchResponses();
  }, []);

  const edit = (item) => {
    localStorage.setItem('data', JSON.stringify(item));
    navigate('/dashboard/response');
  }

  if (error) {
    return <div>Erreur lors du chargement des utilisateurs : {error.message}</div>;
  }

  return (
    <div>
      <Table
        headColumns={headColumns}
        bodyColumns={bodyColumns}
        data={response}
        addFunction={() => navigate('/dashboard/response/create')}
        onClick={edit}
      />
    </div>
  );
}