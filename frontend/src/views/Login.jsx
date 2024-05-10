import React, { useState } from "react";
import logo from '../assets/logo.png';
import Input from '../components/commons/Input';
import Button from '../components/commons/Button';
import InputCheck from '../components/commons/InputCheck';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { login } from "../services/authService";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            toggle: false,
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Champ requis';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Adresse email invalide';
            }
            if (!values.password) {
                errors.password = 'Champ requis';
            } else if (values.password.length < 8) {
                errors.password = 'Le mot de passe doit comporter au moins 8 caractères';
            }
            return errors;
        },
        onSubmit: async (values) => {
            setLoading(true)
            console.log(values)
            const status = await login(values);
            setLoading(false)
            if(status == 200) {
                navigate("/dashboard/societe")
            }
        },
    });

    return (
        <section className="w-full h-screen bg-white md:bg-blue-50 flex flex-col items-center justify-center">
            <div className='my-5 flex items-center'>
                <img src={logo} className='h-7' alt="Logo" />
                <span className='text-3xl text-blue-950 font-bold mx-2'>MINDMAPPER</span>
            </div>
            <div className='p-10 bg-white rounded-md'>
                <p className='text-center font-bold text-2xl text-blue-950 mb-7'>Connexion à votre compte</p>
                <p className='text-center mb-3'>Entrez votre nom d'utilisateur et votre mot de passe pour vous connecter</p>
                <form className='my-7' onSubmit={formik.handleSubmit}>
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Entrez votre email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.errors.email}
                    />
                    <Input
                        label="Mot de passe"
                        type="password"
                        name="password"
                        placeholder="Entrez votre mot de passe"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.errors.password}
                    />
                    <InputCheck
                        type="checkbox"
                        label="Se souvenir de moi"
                        name="toggle"
                        onChange={formik.handleChange}
                        value={formik.values.toggle}
                    />
                    <Button className="w-full my-3" type="submit" isLoading={loading}>Connexion</Button>
                </form>
                <p className='text-center'>Vous n'avez pas de compte ? <span className='hover:cursor-pointer text-primary' onClick={() => navigate('/register')}>Créer un compte</span></p>
            </div>
        </section>
    );
}