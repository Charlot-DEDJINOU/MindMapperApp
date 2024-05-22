import QuestionsData from "../data/QuestionsData"
import InputQuestion from "../components/InputQuestion"
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Home() {

    const formik = useFormik({
        initialValues: {
            question_1 : ''
        },
        validationSchema: Yup.object({
           
        }),
        onSubmit: async (values) => {
           
        },
    });
    return(
        <section id="home">
            <header className="h-16 w-full bg-primary text-white text-xl flex justify-center items-center font-bold">
                Explication Annagramme 
            </header>
            <div className="w-full mt-16 flex items-center justify-center">
               <div className="w-[500px]">
                    <InputQuestion question={QuestionsData()[0]}/> 
               </div>
            </div>
        </section>
    )
}