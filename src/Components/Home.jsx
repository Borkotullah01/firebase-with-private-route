import { useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Home = () => {
    const {name} = useContext(AuthContext)
    return (
    <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-xl rounded-lg shadow-2xl" />
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Home;