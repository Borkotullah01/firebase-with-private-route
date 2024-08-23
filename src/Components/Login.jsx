import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import { useForm } from "react-hook-form"
import Google from "./ErrorPage/SocialLogin";

const Login = () => {

    const { Login } = UseAuth()
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
      const {email,password} = data;
      Login(email, password)
      .then(result=>{
        console.log(result.user);
        navigate("/")
      })
      .catch(error=>{
        console.log(error.code);
      })
    }

    return (
        <>
        <h1 className="text-4xl font-bold text-center">Log in your account</h1>
        <div className="card mt-10 bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", {required: true})} />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", {required: true})} />
            {errors.password && <span className="text-red-500">This field is required</span>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div>
          <p>Already have an account <Link to="/register" className='btn btn-link'>Register</Link></p>
          </div>
        </form>
        <Google></Google>
    </div>
        </>
    
    );
};

export default Login;