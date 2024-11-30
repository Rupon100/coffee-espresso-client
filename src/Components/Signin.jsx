 
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const Signin = () => {
    const { createUser } = useContext(authContext);

    const handleSignin = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const pass = form.pass.value;
      
      createUser(email, pass)
      .then(result => {
        console.log('user created in firebase', result.user);
        const creationTime = result?.user?.metadata?.creationTime;

        const user = { name, email, creationTime };
        fetch('https://espresso-server-2oa9e7rru-rupon100s-projects.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          console.log('send the data: ', data);
          if(data.insertedId){
            alert('User created in DB!');
          }
        })
      })
      .catch(error => console.log(error.message))


    }

    return (
        <div className='text-black flex justify-center items-center  bg-base-200 min-h-screen'>
            <form onSubmit={handleSignin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                </div>
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
                  <button className="btn btn-primary">Signup</button>
                </div>
                <h4 className='text-sm'>All ready have an account? <Link to='/signup' className="text-green-600">Login</Link></h4>
          </form>
        </div>
    );
};

export default Signin;