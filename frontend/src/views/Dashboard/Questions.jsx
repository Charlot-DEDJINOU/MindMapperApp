import { useEffect, useState } from "react";
import Table from "../../components/Table";
import { getQuestions} from "../../services/questionService";
import { useNavigate } from "react-router-dom";

export default function Questions() {
  const headColumns = ["Identifiant", "Content"];
  const bodyColumns = ["identifiant", "content"];
  const [question, setQuestion] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const fetctQuestions = async () => {
      try {
        const response = await getQuestions();
        setQuestion(response);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    };

    fetctQuestions();
  }, []);

  const edit = (item) => {
    localStorage.setItem('data', JSON.stringify(item))
    navigate('/dashboard/question/update')
  }

  if (error) {
    return <div>Erreur lors du chargement des utilisateurs : {error.message}</div>;
  }

  return (
    <Table
      headColumns={headColumns}
      bodyColumns={bodyColumns}
      data={question}
      actions={true}
      addFunction={() => navigate('/dashboard/question/create')}
      editFunction={edit}
    />
  );
}