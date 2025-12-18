import { Link } from "@inertiajs/inertia-react"

export default function UseCase({ usecases, title, description }){
    return (
        <>
            <div className='container mx-auto mb-40'>
                <div className='text-center mb-12'>
                    <h2 className=' 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-2xl font-sans font-bold text-slate-600'>{title}</h2>
                    <p className='mt-4 text-gray-500 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-base font-light'>{description}</p>
                </div>
                <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                    {
                        usecases.map((value, index) => (
                            <div key={index} data-aos="zoom-in" className='2xl:flex xl:flex lg:flex md:flex sm:flex xs:block 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center shadow rounded-3xl 2xl:px-10 xl:px-10 lg:px-3 md:px-5 sm:px-10 xs:px-5 2xl:py-10 xl:py-10 lg:py-5 md:py-10 sm:py-10 xs:py-5'>
                                <div className='mr-5'>
                                    <i className={JSON.parse(value.use_case_meta.value).icon +' px-6 py-5 text-2xl text-indigo-500 h-auto rounded-full flex items-center shadow-sm xs:inline-block'}></i>
                                </div>
                                <div>
                                    <h2 className=' text-xl text-slate-700 font-bold mb-2'>{value.name}</h2>
                                    <p className=' font-light text-gray-500 mb-2'>{JSON.parse(value.use_case_meta.value).description}</p>
                                    <Link href="/login" className=' text-indigo-500 flex items-center xs:inline-block'><span className=' mr-1'>Try It Free</span> <i className="ri-arrow-right-line"></i></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
