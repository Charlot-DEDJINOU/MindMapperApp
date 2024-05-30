import Modal from "../../components/Modal";
import Input from "../../components/commons/Input";
import Button from "../../components/commons/Button";
import AlertSuccess from "../../components/commons/AlertSuccess";
import AlertDanger from "../../components/commons/AlertDanger";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useParams } from "react-router-dom";
import { createQuestion } from "../../services/questionService";
import Textarea from "../../components/commons/Textarea";
import { createPersonality } from "../../services/personalityService";

export default function Personality(){

    const [loading, setLoading] = useState(false)
    const [error, setError] =  useState({
        display : false,
        type : 'success',
        content : ''
    })

    const { type } = useParams()

    const formik = useFormik({
        initialValues: type === 'create' ? {
            name : "",
            description : "",
        } : JSON.parse(localStorage.getItem('data')),
        validationSchema: Yup.object({
            // Ajoutez ici vos schémas de validation si nécessaire
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try{
                const personality = await createPersonality(values)
                console.log(personality)
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

    return(
        <Modal title={type === "create" ? "Nouvelle Personalité" : "Modification d'une personalité"}>
            <form className="w-full mt-5" onSubmit={formik.handleSubmit}>
                <Input 
                    label="Numéro"
                    type="text"
                    name="name"
                    placeholder="Exemple : 639"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                />
                <Textarea 
                    label="Description"
                    name="description"
                    placeholder="Description de la personalité"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.errors.description}
                />
                { error.display && error.type === 'error' && <AlertDanger message={error.content} /> }
                { error.display && error.type === 'success' && <AlertSuccess message={error.content} /> }
                <Button className="w-full my-3" isLoading={loading}>{type === "create" ? "Ajouter" : "Enregistrer"}</Button>
            </form>
        </Modal>
    )
}