import React, { useEffect } from 'react'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])

    if (loading || gLoading) {
        return <Loading />
            ;
    }

    if (error || gError) {
        signInError = <p className=' text-red-600 '>{error?.message || gError?.message}</p>
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.email?.type === "required" &&
                                    <span className='label-text-alt text-red-600'>{errors.email.message}</span>
                                }
                                {errors.email?.type === "pattern" &&
                                    <span className='label-text-alt text-red-600'>{errors.email.message}</span>
                                }
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs" {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }

                                })}

                            />
                            <label className="label">
                                {errors.password?.type === "required" &&
                                    <span className='label-text-alt text-red-600'>{errors.password.message}</span>
                                }
                                {errors.password?.type === "minLength" &&
                                    <span className='label-text-alt text-red-600'>{errors.password.message}</span>
                                }
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    <div className="divider">OR</div>
                    <p><small>New to Doctors Portal? <Link className='text-secondary text ' to="/signup">Create a new Account</Link></small></p>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
        </div>
    )
}

export default Login