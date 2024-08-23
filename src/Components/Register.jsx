
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import UseAuth from '../Hooks/UseAuth';



const Register = () => {

    const {createUser} = UseAuth()
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => {
      const { email, password } = data;
      createUser(email, password)
      .then(result=>{
        console.log(result.user)
        navigate("/")
      })
      .catch(error=>console.log(error.code))
    }
  
    console.log(watch("example"))

    // const handleRegister = e => {
    //     e.preventDefault()
    //     const form = new FormData(e.currentTarget)
    //     const name = form.get("name")
    //     const image = form.get("image")
    //     const email = form.get("email")
    //     const password = form.get("password")
    //     // console.log( name, image, email, password );
    //     createUser( email, password )
    //     .then((result)=>{
    //         console.log(result.user);
    //         navigate("/")
    //     })
    //     .catch((error)=>{
    //         console.log(error.code);
    //     })
    // }

    return (
        <>
        <h1 className="text-4xl font-bold text-center">Register your account</h1>
        <div className="card mt-10 bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Name" className="input input-bordered" {...register("FullName", { required: true })} />
            {errors.FullName && <span className='text-red-500'>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input type="text" name='image' placeholder="Image URL" className="input input-bordered"/>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" {...register("email", {required: true})}/>
            {errors.email && <span className='text-red-500'>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" {...register("password", {required: true})}/>
            {errors.password && <span className='text-red-500'>This field is required</span>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <div>
            <p>Already have an account <Link to="/login" className='btn btn-link'>Login</Link></p>
          </div>
        </form>
    </div>
    </>
    );
};

export default Register;