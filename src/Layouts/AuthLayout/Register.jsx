// import React, { use } from 'react'
// import { Link } from 'react-router'
// import { AuthContext } from '../../Provider/AuthProvider';

// export default function Register() {
//     const handleRegister = (e) => {
//         const {createUser} = use(AuthContext);
//         e.preventDefault();
//         const name = e.target.name.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         createUser(email,password)
//         .then(result=>{
//             console.log(result)
//         })
//         .catch(error=>{
//             console.log(error)
//         })
//     }
//     return (
//         <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
//             <h1 className="text-2xl text-center mt-7 font-bold">Register now!</h1>
//             <div className="card-body">
//                 <form onSubmit={handleRegister}>
//                     <label className="label">Name</label>
//                     <input type="text" name='name' className="input" placeholder="Name" />
//                     <label className="label">Email</label>
//                     <input type="email" name='email' className="input" placeholder="Email" />
//                     <label className="label">Password</label>
//                     <input type="password" name='password' className="input" placeholder="Password" />
//                     <button className="btn btn-neutral mt-4">Regsiter</button>
//                 </form>
//                 <p>Already have an account? please <Link className='text-blue-700 underline' to='/auth/login'>Login</Link></p>
//             </div>
//         </div>
//     )
// }







import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

export default function Register() {
    const { createUser, setUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
               const user = result.user;
               
                updateUser({displayName: name})
                .then(()=>{
                    setUser({...user, displayName: name});
                    navigate('/');
                })
                .catch(error=>{
                    console.log(error);
                    setUser(user);
                })
            })
            .catch(error => {
                console.error('Error creating user:', error.message);
            });
    }

    return (
        <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-2xl text-center mt-7 font-bold">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegister}>
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" placeholder="Password" />

                    <button type="submit" className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>
                    Already have an account? Please <Link className="text-blue-700 underline" to="/auth/login">Login</Link>
                </p>
            </div>
        </div>
    );
}
