import { useRef, useState } from 'react';
import Select from '../../components/commons/Select';
import Button from '../../components/commons/Button';
import CopyIcon from "../../components/icons/CopyIcon";

const CreateResponse = () => {
    const [link, setLink] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const linkRef = useRef(null);

    const children = [
        "TCHONKLOE Thierry",
        "DEDJINOU Charlot",
        "KINNINKPO Mathias",
    ];

    const generateLink = () => {
        setLink("https://www.mindmapperapp.com/thierry-tchonkloe/");
    };

    const handleCopy = () => {
        if (linkRef.current) {
            const linkText = linkRef.current.innerText;
            navigator.clipboard.writeText(linkText).then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 4000); // 5 secondes
            }).catch(err => {
                console.error('Erreur lors de la copie du lien : ', err);
            });
        }
    };

    return (
        <div>
            <div className="p-5 my-5 border border-transparent border-t-2 border-b-2 border-l-0 border-r-0 border-t-sky-600 border-b-sky-600 rounded-md mx-auto w-3/5 md:w-4/5 sm:w-11/12">
                <h3 className="uppercase">Générer le lien à un Utilisateur</h3>
                <div className="my-5 text-justify">
                    Pour générer un lien d&apos;auto-évaluation pour un utilisateur, assurez-vous d&apos;abord que l&apos;utilisateur est bien enregistré, puis sélectionnez-le dans la liste ci-dessous. Cliquez sur le bouton pour générer le lien, qui apparaîtra en dessous du bouton et pourra être copié.
                </div>
            
                <div className=''>
                    <form onSubmit={(e) => { e.preventDefault(); generateLink(); }}>
                        <Select label="Select Users name ..." className="text-black-2" name="create-response"  onChange={null} error="">
                            {children.map((child, index) => <option key={index} value={child}>{child}</option>)}
                        </Select>
                        <div className="flex flex-row justify-evenly mt-5 pt-5">
                            <Button type="submit" isLoading={false}>Générer un lien</Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className='my-2 py-2'>
            {link && (
                <div className="w-full flex flex-row justify-center my-5 py-5 mx-[11%] w-[78%]">
                    <span className="bg-slate-300 border border-sky-700 rounded-lg w-full">
                        <div className="flex flex-row">
                            <p ref={linkRef} className="pt-2 px-5 text-black">{link}</p>
                        </div>
                    </span>
                    <div className="flex justify-end">
                        <Button onClick={handleCopy} className="ml-2 text-white p-2 rounded-md">
                            {isCopied ? "text copié" : <CopyIcon size={20} />}
                        </Button>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default CreateResponse;
