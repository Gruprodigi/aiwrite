import { Link } from "@inertiajs/inertia-react"

export default function Level({ level })
{
    return (
        <>
            <div data-aos="fade-up" className=' container mx-auto 2xl:mb-40 xl:mb-40 lg:mb-40 md:mb-40 sm:mb-40 xs:mb-20'>
                <div className=' 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-full mx-auto text-center'>
                    <h2 className='text-slate-700 font-extrabold 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl xs:text-3xl font-sans'>{level.title}</h2>
                    <p className='font-sans 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-sm pt-5 text-slate-500 mb-8 2xl:px-56 xl:px-56 lg:px-56 md:px-32 xs:px-0'>{level.description}</p>
                    <Link href={level.button_url} className=' bg-indigo-500 text-white rounded-full px-10 py-4'>{level.button_title}</Link>
                    <div className='mt-12 2xl:flex xl:flex lg:flex md:flex xs:hidden sm:grid sm:grid-cols-2 sm:gap-5 justify-between'>
                        <div className="2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center sm:justify-center 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4">
                            <span className=" ring-1 rounded-full px-4 py-3 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500"><i className='ri-check-line text-indigo-500'></i></span>
                            <span className=" 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-base font-sans font-light text-slate-600 whitespace-nowrap">{level.level_list1}</span>
                        </div>
                        <div className="2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center sm:justify-center 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4">
                            <span className=" ring-1 rounded-full px-4 py-3 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block"><i className='ri-check-line text-indigo-500'></i></span>
                            <span className=" 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-base font-sans font-light text-slate-600 whitespace-nowrap">{level.level_list2}</span>
                        </div>
                        <div className=" sm:col-span-2">
                            <div className="2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center sm:justify-center 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4">
                                <span className=" ring-1 rounded-full px-4 py-3 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block"><i className='ri-check-line text-indigo-500'></i></span>
                                <span className=" 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-base font-sans font-light text-slate-600 whitespace-nowrap">{level.level_list3}</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
