import FrontendApp from "@/Layouts/Frontentapp";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function Contact(props)
{

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [ status, setStatus ] = useState(false)

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

    const onSubmit = (data) => {
        Inertia.visit('/contact', {
            method: 'post',
            data: data,
            onBefore: visit => {
                setStatus(true)
            },
            onSuccess: () => {
                Toast.fire({
                    icon: 'success',
                    title: 'Message Successfully Sent!',
                })
                setStatus(false)
            },
        })
    }

    return (
        <>
            <Head>
                <title>{props.seo_contact.name}</title>
                <meta name='description' content={JSON.parse(props.seo_contact.seometa.value).meta_description}/>
                <meta name='keywords' content={JSON.parse(props.seo_contact.seometa.value).meta_tag}/>

                <meta name="twitter:title" content={JSON.parse(props.seo_contact.seometa.value).twitter_title}></meta>
            </Head>
            <FrontendApp settings={props.settings} menuitems={props.menuitems} hero={props.hero} footer_first_menuitems={props.footer_first_menuitems} footer_second_menuitems={props.footer_second_menuitems} footer_third_menuitems={props.footer_third_menuitems} footer_four_menuitems={props.footer_four_menuitems}>
                {/* breadcrumb area start */}
                <div className=" py-40 mt-8 bg-indigo-50">
                    <div className="text-center">
                        <h2 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-bold text-slate-600">Contact Us</h2>
                        <nav className="flex justify-center px-5 py-3 text-gray-700 rounded-lg" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li>
                                <div className="flex items-center">
                                    <a href="#" className="ml-1 text-lg font-light text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Home</a>
                                </div>
                                </li>
                                <li aria-current="page">
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <span className="ml-1 text-lg font-light text-gray-400 md:ml-2 dark:text-gray-400">Contact Us</span>
                                </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* breadcrumb area end */}

                {/* contact area start */}
                <div className=" my-40 container mx-auto">
                    <div className=" 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 xs:w-full mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="2xl:flex xl:flex lg:flex md:flex sm:flex xs:block 2xl:space-x-5 xl:space-x-5 lg:space-x-5 md:space-x-5 sm:space-x-5 xs:space-x-0 mb-5">
                                <div className="w-full 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-5">
                                    <label htmlFor="name" className="block text-slate-500 font-light mb-1">Name</label>
                                    <input type="text" {...register("name", { required: true })} className="w-full px-4 h-12 border border-slate-300 rounded-md placeholder:text-sm placeholder:text-gray-400" placeholder="Enter Your Name" />
                                    {errors.name && <span className=" font-light text-sm text-red-500">The name field is required</span>}
                                </div>
                                <div className=" w-full">
                                    <label htmlFor="email" className="block text-slate-500 font-light mb-1">Email</label>
                                    <input type="email" {...register("email", { required: true })} className="w-full px-4 h-12 border border-slate-300 rounded-md placeholder:text-sm placeholder:text-gray-400" placeholder="Enter Your Email" />
                                    {errors.email && <span className=" font-light text-sm text-red-500">The email field is required</span>}
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="subject" className="block text-slate-500 font-light mb-1">Subject</label>
                                <input type="text" {...register("subject", { required: true })} className="w-full px-4 h-12 border border-slate-300 rounded-md placeholder:text-sm placeholder:text-gray-400" placeholder="Enter Your Subject" />
                                {errors.subject && <span className=" font-light text-sm text-red-500">The subject field is required</span>}
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-slate-500 font-light mb-1">Message</label>
                                <textarea {...register("message", { required: true })} placeholder="Write here..." rows={5} className="w-full px-4 border border-slate-300 rounded-md placeholder:text-sm placeholder:text-gray-400" />
                                {errors.message && <span className=" font-light text-sm text-red-500">The message field is required</span>}
                            </div>
                            {
                                status ? (
                                    <button disabled className=" float-right bg-indigo-500 px-8 py-3 rounded-lg text-white font-light mt-3 cursor-not-allowed">Sending ...</button>
                                ) : (
                                    <button type="submit" className=" float-right bg-indigo-500 px-8 py-3 rounded-lg text-white font-light mt-3">Send Message</button>
                                )
                            }
                        </form>
                    </div>
                </div>
                {/* contact area end */}
            </FrontendApp>
        </>

    )
}
