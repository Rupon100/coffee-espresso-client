import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";


const Signup = () => {

    const {  signInUser } = useContext(authContext);

    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;

        signInUser(email, pass)
        .then(result => {
            console.log(result.user);

            // update last login time
            const lastSignin = result?.user?.metadata?.lastSignInTime;
            const loginInfo = { email, lastSignin };

            fetch(`http://localhost:5000/users/`, {
              method: 'PATCH',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
              console.log('Sign in info updated: ', data)
            })


        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className='text-black flex justify-center items-center  bg-base-200 min-h-screen'>
        <form onSubmit={handleSignin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name='email' className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name='pass' className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <h4 className='text-sm'>New in this app? <Link to='/signin' className="text-green-600">Login</Link></h4>
      </form>
    </div>
    );
};

export default Signup;