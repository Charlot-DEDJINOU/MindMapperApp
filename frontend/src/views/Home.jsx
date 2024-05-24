import QuestionsData from "../data/QuestionsData"
import InputQuestion from "../components/InputQuestion"
import Button from '../components/commons/Button'
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

    const saveData = () => {
        localStorage.setItem('data', JSON.stringify(formik.values))
    }

    return(
        <section id="home">
            <div className="bg-white p-10 rounded-md mx-2">
                <div className="flex items-end justify-between">
                    <span className="block text-primary font-bold">Question N°5</span>
                    <Button onClick={saveData}>Enregistrer</Button>
                </div>
                <form className="w-full md:w-[500px] mt-5" onSubmit={formik.handleSubmit}>
                    <InputQuestion question={QuestionsData()[0]}/>
                    <div className="flex justify-between mt-5">
                        <span className="text-white bg-bodydark2 w-30 py-2 px-3 rounded-md flex flex-row items-center justify-center hover:cursor-pointer">
                            Précedente
                        </span>
                        <span className="text-white bg-success w-30 py-2 px-3 rounded-md flex flex-row items-center justify-center hover:cursor-pointer">
                            Suivante
                        </span>
                    </div>
                </form>
            </div>
        </section>
    )
}