import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword, logo }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className=' 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 xs:w-11/12 mx-auto my-32'>
                <div className=' text-center'>
                    <div className='flex items-center justify-center mb-12'>
                        <img className=' h-9' src={'/storage/'+logo} alt="" />
                    </div>
                    <h2 className=' font-sans text-4xl text-slate-600 font-extrabold '>Log In</h2>
                    <p className=' text-gray-400 font-light my-3'>Please enter your email & password and then click to login button. If your information is correct then it will redirect you.</p>
                    <form onSubmit={submit} className=' mt-7'>
                        <div className=' mb-4'>
                            <label className=' block text-left text-slate-500 mb-1 text-base' htmlFor="email">Email Address</label>
                            <input onChange={(e) => onHandleChange(e)} className=' w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5' type="email" name="email" id='email' />
                            <InputError message={errors.email} className="mt-1 text-left" />
                        </div>
                        <div className=' mb-2'>
                            <label className=' block text-left text-slate-500 mb-1 text-base' htmlFor="password">Password</label>
                            <input className=' w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5' type="password" onChange={(e) => onHandleChange(e)}  name="password" id='password' />
                            <InputError message={errors.password} className="mt-1 text-left" />
                        </div>
                        <div className=' flex items-center justify-between'>
                            <div className="flex items-center">
                                <input onChange={(e) => onHandleChange(e)} name="remember" id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 focus:ring-2"/>
                                <label htmlFor="default-checkbox" className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-300">Remember Me</label>
                            </div>
                            {canResetPassword && (
                            <Link href={route('password.request')} className=' text-indigo-500 text-sm'>Forgotten Password?</Link>
                            )}
                        </div>
                        <button type='submit' className=' mt-8 py-3 rounded-lg bg-indigo-500 text-white w-full mb-2'>Login</button>
                        <p className=' text-gray-500 font-light text-sm'>Don't Have And Account yet? <Link className=' text-indigo-500 font-normal' href='/register'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}
