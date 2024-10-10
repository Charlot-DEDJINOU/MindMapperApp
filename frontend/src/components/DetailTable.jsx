import React, { useEffect, useState } from 'react';
import TableauResponse from './TableauResponse';
import BarHistogram from './commons/BarHistogram';
import Button from './commons/Button';
import Select from './commons/Select';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getPersonalities } from '../services/personalityService';
import logo from '../assets/logo.png';
import { updateResponsePersonality } from '../services/responseService';

const DetailTable = React.forwardRef((props, ref) => {
  const [data, setData] = useState([]);
  const [personalities, setPersonalities] = useState([]);
  const [response, setResponse] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("Valider personalité")

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('data') || '{}');
    formik.setFieldValue('id_personality', localData.id_personality || '');
    setResponse(localData);
    if (localData.statistique) {
      const formattedData = Object.values(localData.statistique).map(item => {
        const [numerator, denominator] = item.split('/').map(Number);
        return (numerator / denominator) * 100;
      });
      setData(formattedData);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const personalitiesData = await getPersonalities();
        setPersonalities(personalitiesData);
      } catch (e) {
        setError(e);
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      personality_id: response.id_personality || '',
    },
    validationSchema: Yup.object({
      personality_id: Yup.string().required('Veuillez sélectionner une personnalité.'),
    }),
    onSubmit: async (values) => {
      console.log(values)
      setLoading(true);
      try {
         const updateResponse = await updateResponsePersonality({...values, response_id : response.id},response.id)
         setText("Mise à jour éffectué avec succés")
      } catch (e) {
        setText("Une erreur s'est produite")
        console.error(e);
      }
      setLoading(false);
    },
  });

  if (error) {
    return <div>Erreur lors du chargement des questions : {error.message}</div>;
  }

  return (
    <div ref={ref} className="pt-3 w-full">
        <div className='flex justify-evenly items-center mt-10 flex-wrap'>
            <img src={logo} alt="logo" className='w-32 h-12' />
            <h3 className="text-2xl font-bold text-center">Histogramme du resultat de {response.firstname + " " + response.lastname}</h3>
        </div>
        <div className="bg-gray-100 min-h-screen flex justify-center items-center mb-5">
            <BarHistogram data={data} />
        </div>
        <div className="pt-5">
            <form onSubmit={formik.handleSubmit}>
            <p className="text-primary font-bold text-xl">Personnalité</p>
            <Select
                label=""
                className="text-black-2"
                name="personality_id"
                onChange={formik.handleChange}
                value={formik.values.personality_id}
                error={formik.errors.personality_id}
            >
                {personalities.map((child, index) => (
                <option key={index} value={child.id}>{child.name}</option>
                ))}
            </Select>
            <Button type="submit" isLoading={loading} className="w-full">{text}</Button>
            </form>
        </div>
        <div className="p-2">
            <h1 className="text-2xl font-bold text-center my-10">Tableau de Réponse aux Questions</h1>
            <TableauResponse userAnswer={response.content || {}} />
        </div>
    </div>
  );
});

DetailTable.displayName = 'DetailTable';

export default DetailTable;
