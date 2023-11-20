import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const navigate = useNavigate(); 
    const {googleSignIn} = useAuth(); 

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(res => {
            console.log(res.user)
            navigate('/'); 
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="px-8">
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="w-full btn-outline btn">
                    <FaGoogle></FaGoogle>
                    Google 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;