import QuestionsData from "../data/QuestionsData"
import InputQuestion from "../components/InputQuestion"

export default function Home() {

    return(
        <section id="home">
            <header className="h-16 w-full bg-primary text-white text-xl flex justify-center items-center font-bold">
                Explication Annagramme 
            </header>
            <div className="w-full mt-16 flex items-center justify-center">
               <div className="w-[500px]">
                    <InputQuestion {...QuestionsData()[0]}/> 
               </div>
            </div>
        </section>
    )
}