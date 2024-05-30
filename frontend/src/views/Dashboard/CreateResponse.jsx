import { useEffect, useRef, useState } from 'react';
import Select from '../../components/commons/Select';
import Button from '../../components/commons/Button';
import CopyIcon from "../../components/icons/CopyIcon";
import AddIcon from "../../components/icons/AddIcon";
import AlertSuccess from "../../components/commons/AlertSuccess";
import AlertDanger from "../../components/commons/AlertDanger";
import Modal from '../../components/Modal';
import { getUsers } from "../../services/userService";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { createResponse } from '../../services/responseService';

const CreateResponse = () => {
    const [link, setLink] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const linkRef = useRef(null);
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] =  useState({
        display : false,
        type : 'success',
        content : ''
    })
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

    const formik = useFormik({
        initialValues: {
            user_id : ''
        },
        validationSchema: Yup.object({
            // Ajoutez ici vos schémas de validation si nécessaire
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try{
                const response = await createResponse(values)
                setLink(import.meta.env.VITE_APP_URL + response.id_link)
                setError({
                    display: true,
                    type: 'success',
                    content: 'Action reussie avec succés'
                });
                formik.resetForm()
            }catch(e){
                setError({
                    display: true,
                    type: 'error',
                    content: 'Une erreur s\'est produite. Veuillez réessayer plus tard'
                });
            }
            setLoading(false);
        },
    });

    const handleCopy = () => {
        if (linkRef.current) {
            const linkText = linkRef.current.innerText;
            navigator.clipboard.writeText(linkText).then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 5000)
            }).catch(err => {
                console.error('Erreur lors de la copie du lien : ', err);
            });
        }
    };

    return (
        <Modal title="Générer un lien d'Auto-évaluation">
            <div className="p-5 flex flex-col">
                <Button className="min-w-32 ml-5 mb-2 self-end" onClick={() => navigate('/dashboard/user/create')}>
                    <AddIcon />
                    <span className="ml-2">Utilisateur</span>
                </Button>
                <div className="my-5 text-justify">
                    Pour générer un lien d&apos;auto-évaluation pour un utilisateur, assurez-vous d&apos;abord que l&apos;utilisateur est bien enregistré, puis sélectionnez-le dans la liste ci-dessous. Cliquez sur le bouton pour générer le lien, qui apparaîtra en dessous du bouton et pourra être copié.
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <Select label="À qui est destiné ce lien ?" name="user_id"  onChange={formik.handleChange} error={formik.errors.user_id} value={formik.values.user_id}>
                        {users.map((child, index) => <option key={index} value={child.id}>{child.lastname + ' ' + child.firstname}</option>)}
                    </Select>
                    {link && (
                        <div className="w-full flex flex-row justify-center mb-4">
                            <span className="bg-slate-300 border border-sky-700 rounded-lg w-full">
                                <div className="flex flex-row">
                                    <p ref={linkRef} className="pt-2 px-5 text-black">{link}</p>
                                </div>
                            </span>
                            <div className="flex justify-end">
                                <span onClick={handleCopy} className="text-white bg-primary w-auto py-2 px-3 rounded-md flex flex-row items-center justify-center hover:cursor-pointer ml-2">
                                    {isCopied ? "Copié" : <CopyIcon size={20} />}
                                </span>
                            </div>
                        </div>
                    )}
                    { error.display && error.type === 'error' && <AlertDanger message={error.content} /> }
                    { error.display && error.type === 'success' && <AlertSuccess message={error.content} /> }
                    <Button type="submit" className="w-full" isLoading={loading}>Générer un lien</Button>
                </form>
            </div>
        </Modal>
    );
};

export default CreateResponse;