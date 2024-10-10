export default function Footer() {
    return(
        <footer className="w-full bg-[#000000dd] flex items-center justify-center p-5 text-white">
            <div className="container flex flex-col items-center">
                <b className="text-center mb-3 text-3xl text-secondary">Ennéagramme</b>
                <p className="text-center"> L’être humain à le potentiel de devenir quelque chose d’autre - David Goggins</p>
                <div className="copyright my-4">
                    &copy; Copyright <strong><span>Ennéagramme </span></strong>All Rights Reserved 
                </div>
                <div className="text-center">
                    Created by
                    <a href="https://charlot-dedjinou.vercel.app" className="font-bold"> Charlot DEDJINOU - </a>
                    <a href="" className="font-bold"> Mathias KINNINKPO - </a>
                    <a href="" className="font-bold"> Thierry TCHONKLOE</a>
                </div>
            </div>
        </footer>
    )
}