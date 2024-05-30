import LeftIcon from './icons/LeftIcon';
import { useNavigate } from 'react-router-dom';

export default function Modal({ children, title }){

    const navigate = useNavigate();

    return(
        <section className="w-full p-8 bg-white text-black shadow-md rounded-md ">
            <div className='flex items-center'>
                <span onClick={() => navigate(-1)} className="mr-4 flex items-center justify-center w-[45px] h-[45px] rounded-full bg-primary text-white hover:cursor-pointer">
                    <LeftIcon />
                </span>
                <p className='font-bold text-lg text-primary w-3/4'>{ title }</p>
            </div>
            { children }
        </section>
    )
}