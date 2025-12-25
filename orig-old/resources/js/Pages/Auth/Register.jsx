import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register({ logo }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <div className='  2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 xs:w-11/12 mx-auto my-24'>
                <div className=' text-center'>
                    <div className='flex items-center justify-center mb-12'>
                        <img className=' h-8' src={'/storage/'+logo} alt="" />
                    </div>
                    <h2 className=' font-sans text-4xl text-slate-600 font-extrabold '>Sign Up</h2>
                    <p className=' text-gray-400 font-light my-3'>Please fill up all input field correctly then click register button. If your information is correct then it will register your account. </p>
                    <form onSubmit={submit} className=' mt-7'>
                        <div className=' mb-4'>
                            <label className=' block text-left text-slate-500 mb-1 text-base' htmlFor="name">Name</label>
                            <input onChange={(e) => onHandleChange(e)} className=' w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5' type="text" name="name" id='name' />
                            <InputError message={errors.name} className="mt-1 text-left" />
                        </div>
                        <div className=' mb-4'>
                            <label className=' block text-left text-slate-500 mb-1 text-base' htmlFor="email">Email Address</label>
                            <input onChange={(e) => onHandleChange(e)} className=' w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5' type="email" name="email" id='email' />
                            <InputError message={errors.email} className="mt-1 text-left" />
                        </div>
                        <div className=' mb-4'>
                            <label className=' block text-left text-slate-500 mb-1 text-base' htmlFor="password">Password</label>
                            <input className=' w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5' type="password" onChange={(e) => onHandleChange(e)}  name="password" id='password' />
                            <InputError message={errors.password} className="mt-1 text-left" />
                        </div>
                        <div className=' mb-4'>
                            <label className=' block text-left text-slate-500 mb-1 text-base' htmlFor="password_confirmation">Confirm Password</label>
                            <input className=' w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5' type="password" onChange={(e) => onHandleChange(e)}  name="password_confirmation" id='password_confirmation' />
                            <InputError message={errors.password_confirmation} className="mt-1 text-left" />
                        </div>
                        <button type='submit' className=' mt-2 py-3 rounded-lg bg-indigo-500 text-white w-full mb-2'>Register</button>
                        <p className=' text-gray-500 font-light text-sm'>Already Have An Account? <Link className=' text-indigo-500 font-normal' href='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    );
}
