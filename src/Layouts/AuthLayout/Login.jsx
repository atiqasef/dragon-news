import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../../Provider/AuthProvider';

export default function Login() {
    const { logIn, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        logIn(email, password)
            .then(result => {
                // const user = result.user;
                // setUser(user);
                navigate(`${location.state? location.state : '/'}`);
            })
            .catch(error=>{
                console.log(error);
                setError('Password must be 6 character');
            })
    }
    return (

        <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-2xl text-center mt-7 font-bold">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleLogin}>
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
               
                    <p className='text-red-500'>{error}</p>
               
                <p>New to this website? please <Link className='underline text-blue-700' to='/auth/register'>Register</Link></p>
            </div>
        </div>

    )
}
