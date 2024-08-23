import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const SocialLogin = () => {
    const {GoogleLogIn, GithubLogIn, TwitterLogIn} = UseAuth()
    const navigate = useNavigate()
    return (
        <div>
           <button 
           onClick={()=>{
            GoogleLogIn()
            .then(result=>{
                console.log(result.user);
                navigate("/")
            })
            .catch(error=>{
                console.log(error.code);
            })
           }}  
           className="btn btn-primary">
            Google
            </button>
           <button 
           onClick={()=>{
            GithubLogIn()
            .then(result=>{
                console.log(result.user);
                navigate("/")
            })
            .catch(error=>{
                console.log(error.code);
            })
           }}  
           className="btn btn-primary">
            Github
            </button>
           <button 
           onClick={()=>{
            TwitterLogIn()
            .then(result=>{
                console.log(result.user);
                navigate("/")
            })
            .catch(error=>{
                console.log(error.code);
            })
           }}  
           className="btn btn-primary">
            Twitter
            </button>
        </div>
    );
};

export default SocialLogin;