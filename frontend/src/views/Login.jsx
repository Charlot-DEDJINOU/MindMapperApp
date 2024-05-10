import logo from '../assets/logo.png'
import Input from '../components/commons/Input'
import Button from '../components/commons/Button'
import InputCheck from '../components/commons/InputCheck'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()

    return(
        <section className="w-full h-screen bg-white md:bg-blue-50 flex flex-col items-center justify-center">
            <div className='my-5 flex items-center'>
                <img src={logo} className='h-6'/>
                <span className='text-3xl text-blue-950 font-bold mx-2'>MINDMAPPER</span>
            </div>
            <div className='p-10 bg-white rounded-md'>
                <p className='text-center font-bold text-2xl text-blue-950 mb-7'>Connexion à votre compte</p>
                <p className='text-center mb-3'>Entrez votre nom d'utilisateur et votre mot de passe pour vous connecter</p>
                <form className='my-7'>
                    <Input
                        label="Email"
                        type="email"
                    />
                    <Input
                        label="Mot de passe"
                        type="password"
                    />
                    <InputCheck 
                        type="checkbox"
                        label="Se souvenir de moi"
                        value={false}
                    />
                    <Button className="w-full my-3">Connexion</Button>
                </form>
                <p className='text-center'>Vous n'avez pas de compte ? <span className='hover:cursor-pointer text-primary'  onClick={() => navigate('/register')}>Créer un compte</span></p>
            </div>
        </section>
    )
}