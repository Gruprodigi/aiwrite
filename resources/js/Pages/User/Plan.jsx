import Sidebar from "@/Components/user/account/Sidebar";
import App from "@/Components/user/layout/app";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Plan(props)
{
    return (
        <>
            <Head>
                <title>Manage Plan</title>
            </Head>
            <App logo={props.logo}>
            <div className="container mx-auto my-20">
                    <div className="2xl:flex lg:flex md:flex sm:block 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12">
                        <Sidebar />

                        <div className="w-full">
                        {
                            props.errors[0] && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5" role="alert">
                                <span className="block sm:inline">{props.errors[0]}</span>
                                </div>
                            )
                        }
                            <div className="grid 2x:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6">
                            {
                                props.plans.map((plan, index) => (
                                    <div key={index} className="bg-white border rounded-lg px-8 py-14">
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <h4 className="font-semibold text-gray-500 text-xl">{plan.name}</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="py-3 text-slate-400 text-base font-normal">{JSON.parse(plan.data).short_content}</p>
                                        </div>
                                        <div className="flex items-center pb-3">
                                            <h2 className=" text-gray-600 font-bold text-4xl">{props.currency}{plan.price} </h2><sub className=" text-gray-400 text-base font-light text-uppercase"> / {plan.duration_type}</sub>
                                        </div>
                                        <h4 className="text-lg font-medium text-gray-600">What’s included</h4>
                                        <ul className="py-2">
                                            <li className="flex items-center text-gray-600 font-medium text-base py-2"><i className="ri-checkbox-circle-fill text-blue-600 text-xl mr-2"></i> Generate {plan.word_limit.toLocaleString('en-US')} AI Words / month</li>
                                            <li className="flex items-center text-gray-600 font-medium text-base py-2"><i className="ri-checkbox-circle-fill text-blue-600 text-xl mr-2"></i> Access 12+ use-cases</li>

                                            <li className="flex items-center text-gray-600 font-medium text-base py-2"><i className={JSON.parse(plan.data).customerSupport == 1 ? 'ri-checkbox-circle-fill text-blue-600 text-xl mr-2' : 'ri-close-circle-fill text-red-600 text-xl mr-2'}></i> Priority email & chat support {JSON.parse(plan.data).customerSupport}</li>

                                        </ul>
                                        {
                                            props.user.plan_id === plan.id ? (
                                                <a className=" bg-indigo-200 text-indigo-500 font-normal text-base w-full block text-center py-3 rounded-md leading-normal mt-3 cursor-not-allowed">Already Subscribed</a>
                                            ) : (
                                                <Link href={`/user/select/payment/${plan.id}`} className=" bg-indigo-500 text-white font-normal text-base w-full block text-center py-3 rounded-md leading-normal mt-3 cursor-pointer">Subscribe Now</Link>
                                            )
                                        }

                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </App>
        </>
    )
}
