import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Authenticated() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user') == null) {
            navigate('/login');
        } else {
            navigate('/dashboard');
        }
    }, [navigate]);

    return (
        <div></div>
    );
}