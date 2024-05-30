import Modal from "../../components/Modal";
import Input from "../../components/commons/Input";
import Button from "../../components/commons/Button";
import AlertSuccess from "../../components/commons/AlertSuccess";
import AlertDanger from "../../components/commons/AlertDanger";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useParams } from "react-router-dom";
import { createUser } from "../../services/userService";

export default function User(){

    const [loading, setLoading] = useState(false)
    const [error, setError] =  useState({
        display : false,
        type : 'success',
        content : ''
    })

    const { type } = useParams()

    const formik = useFormik({
        initialValues: type === 'create' ? {
            firstname : "",
            lastname : "",
            email : "",
            phone : "",
            password : ""
        } : JSON.parse(localStorage.getItem('data')),
        validationSchema: Yup.object({
            // Ajoutez ici vos schémas de validation si nécessaire
        }),
        onSubmit: async (values) => {
            setLoading(true);
            try{
                const user = await createUser(values)
                console.log(user)
                setError({
                    display: true,
                    type: 'success',
                    content: 'Utilisateurs crée avec succès'
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
        <Modal title={type === "create" ? "Créer un utilisateur" : "Modifier un utilisateur"}>
            <form className="w-full mt-5" onSubmit={formik.handleSubmit}>
                <div className="md:flex">
                    <Input 
                        label="Prénom"
                        type="text"
                        name="firstname"
                        placeholder="Prénom de l'utilisateur"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        error={formik.errors.firstname}
                        className="md:mr-2"
                    />
                    <Input 
                        label="Nom"
                        type="text"
                        name="lastname"
                        placeholder="Nom de l'utilisateur"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        error={formik.errors.lastname}
                    />
                </div>
                <Input 
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
                <Input 
                    label="Telephone"
                    type="tel"
                    name="phone"
                    placeholder="59105267"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.errors.phone}
                />
                <Input 
                    label="Mot de passe"
                    type="password"
                    name="password"
                    placeholder=""
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                    disabled={type === 'update'}
                />
                { error.display && error.type === 'error' && <AlertDanger message={error.content} /> }
                { error.display && error.type === 'success' && <AlertSuccess message={error.content} /> }
                <Button className="w-full my-3" isLoading={loading}>{type === "create" ? "Ajouter" : "Enregistrer"}</Button>
            </form>
        </Modal>
    )
}