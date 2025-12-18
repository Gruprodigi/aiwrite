import InputArea from "@/Components/user/editor/Inputarea";
import App from "@/Components/user/layout/app";
import { Inertia } from "@inertiajs/inertia";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Head } from "@inertiajs/inertia-react";
import Sidebar from "@/Components/user/account/Sidebar";

export default function Account(props)
{

    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ currentPassword, setCurrentPassword ] = useState()
    const [ password, setPassword ] = useState()
    const [ confirmPassword, setConfirmPassword ] = useState()
    const [ error, setError ] = useState({
        param: '',
        msg: ''
    })


    var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    useEffect(() => {
        setName(props.user.name)
        setEmail(props.user.email)

    }, [props.user])


    const handleSubmit = (e) => {
        e.preventDefault();

        setError({
            param: '',
            msg: ''
        })

        if(!name)
        {
            return setError({
                param: 'name',
                msg: 'The Name Field Is Required'
            })
        }

        if(!email)
        {
            return setError({
                param: 'email',
                msg: 'The Email Field Is Required'
            })
        }

        if(currentPassword)
        {
            if(!currentPassword)
            {
                return setError({
                    param: 'currentPassword',
                    msg: 'The Current Password Field Is Required'
                })
            }

            if(!password)
            {
                return setError({
                    param: 'password',
                    msg: 'The Password Field Is Required'
                })
            }

            if(!confirmPassword)
            {
                return setError({
                    param: 'confirmPassword',
                    msg: 'The Confirm Password Field Is Required'
                })
            }

            if(password != confirmPassword)
            {
                return setError({
                    param: 'password',
                    msg: "The Confirm Password doesn't match."
                })
            }
        }

        Inertia.visit('/user/account', {
            method: 'post',
            data: {
                name: name,
                email: email,
                currentPassword: currentPassword,
                password: password,
                confirmPassword: confirmPassword
            },
            onSuccess: page => {
                Toast.fire({
                    icon: 'success',
                    title: 'Successfully Updated!'
                })
            },
            onError: errors => {
                Toast.fire({
                    icon: 'error',
                    title: errors.currentPassword
                })
            },
          })






    }


    return (
        <>
            <Head>
                <title>Edit Profile</title>
            </Head>
            <App logo={props.logo}>
                <div className="container mx-auto my-20">
                    <div className="2xl:flex lg:flex md:flex sm:block 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12">
                        <Sidebar />
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full">
                            <h1 className=" text-slate-600 text-2xl font-medium">Edit Profile Information</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-8">
                                    <InputArea defaultValue={props.user.name} label={'Name'} onHandleChange={(e) => setName(e.target.value)} />
                                    {
                                        error && error.param === 'name' && (
                                            <span className=" text-red-500 text-sm">{error.msg}</span>
                                        )
                                    }
                                </div>
                                <div className="mt-5">
                                    <InputArea defaultValue={props.user.email} label={'Email'} type={'email'} onHandleChange={(e) => setEmail(e.target.value)} />
                                    {
                                        error && error.param === 'email' && (
                                            <span className=" text-red-500 text-sm">{error.msg}</span>
                                        )
                                    }
                                </div>
                                <div className=" mt-12">
                                    <h5 className="text-slate-600 text-2xl font-medium">Change Your Password</h5>
                                    <div className="mt-5">
                                        <InputArea label={'Current Password'} type={'password'} onHandleChange={(e) => setCurrentPassword(e.target.value)} />
                                        {
                                            error && error.param === 'currentPassword' && (
                                                <span className=" text-red-500 text-sm">{error.msg}</span>
                                            )
                                        }
                                    </div>
                                    <div className="mt-5">
                                        <InputArea label={'Password'} type={'password'} onHandleChange={(e) => setPassword(e.target.value)}  />
                                        {
                                            error && error.param === 'password' && (
                                                <span className=" text-red-500 text-sm">{error.msg}</span>
                                            )
                                        }
                                    </div>
                                    <div className="mt-5">
                                        <InputArea label={'Confirmation Password'} type={'password'} onHandleChange={(e) => setConfirmPassword(e.target.value)} />
                                        {
                                            error && error.param === 'confirmPassword' && (
                                                <span className=" text-red-500 text-sm">{error.msg}</span>
                                            )
                                        }
                                    </div>
                                    <div className=" mt-5 float-right mb-20">
                                        <button type="submit" className=" bg-indigo-500 py-3 px-12 text-white text-base rounded-md">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </App>
        </>
    )
}
