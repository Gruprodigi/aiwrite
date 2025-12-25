import { Link } from "@inertiajs/inertia-react"

export default function Pricing({ plans, title, currency })
{
    return (
        <>
            <div className=' container mx-auto 2xl:mb-40 xl:mb-40 lg:mb-40 md:mb-40 sm:mb-40 xs:mb-20'>
                {
                    title && (
                        <div className='text-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-sans font-bold text-slate-600 mb-12'>{title}</div>
                    )
                }
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {
                        plans.map((plan, index) => (
                            <div data-aos="zoom-in-up" key={index} className="bg-white shadow rounded-lg 2xl:px-12 lg:px-12 xl:px-12 md:px-12 sm:px-12 xs:px-5 2xl:py-14 xl:py-14 lg:py-14 md:py-14 sm:py-14 xs:py-5">
                                <div className="flex items-center space-x-3">
                                    <div>
                                        <h4 className="font-semibold text-gray-500 text-xl">{plan.name}</h4>
                                    </div>
                                </div>
                                <div>
                                    <p className="py-3 text-slate-400 text-base font-normal">{JSON.parse(plan.data).short_content}</p>
                                </div>
                                <div className="flex items-center pb-3">
                                    <h2 className=" text-gray-600 font-bold text-4xl">{currency}{plan.price} </h2><sub className=" text-gray-400 text-base font-light text-uppercase"> / {plan.duration_type}</sub>
                                </div>
                                <h4 className="text-lg font-medium text-gray-600">What’s included</h4>
                                <ul className="py-2">
                                    <li className="flex items-center text-gray-600 font-medium 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base xs:text-sm py-2"><i className="ri-checkbox-circle-fill text-blue-600 text-xl mr-2"></i> Generate {plan.word_limit.toLocaleString('en-US')} AI Words / month</li>
                                    <li className="flex items-center text-gray-600 font-medium 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base xs:text-sm py-2"><i className="ri-checkbox-circle-fill text-blue-600 text-xl mr-2"></i> Access 12+ use-cases</li>

                                    <li className="flex items-center text-gray-600 font-medium 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base xs:text-sm py-2"><i className={JSON.parse(plan.data).customerSupport == 1 ? 'ri-checkbox-circle-fill text-blue-600 text-xl mr-2' : 'ri-close-circle-fill text-red-600 text-xl mr-2'}></i> Priority email & chat support {JSON.parse(plan.data).customerSupport}</li>

                                </ul>
                                <Link href={`/user/select/payment/${plan.id}`} className=" bg-indigo-500 text-white font-normal text-base w-full block text-center py-3 rounded-md leading-normal mt-3 cursor-pointer">Subscribe Now</Link>
                            </div>
                        ))
                    }
                    </div>
            </div>
        </>
    )
}
