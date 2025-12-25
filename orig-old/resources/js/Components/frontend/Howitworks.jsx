export default function Howitworks({ data, title })
{

    return (
        <>
            <div className=' container mx-auto mb-40'>
                <div className='text-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-2xl font-sans font-bold text-slate-600 mb-12'>{title}</div>
                <div className='2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center justify-center 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12 sm:space-x-5'>
                    <div data-aos="fade-right" className='2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-2/5 xs:w-full bg-indigo-100  rounded-2xl p-6'>
                        <img className=' ring ring-indigo-500 rounded-2xl' src={'/storage/howitworks/'+data.step1_image} alt="" />
                    </div>
                    <div data-aos="fade-left" className='2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-10 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center'>
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:flex xs:block 2xl:items-center xl:items-center lg:items-center md:items-start sm:items-center '>
                            <span className=' ring-1 rounded-full px-4 py-2 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-4'>1</span>
                            <span className=' 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl font-sans font-bold text-slate-600 xs:block'>{data.step1_title}</span>
                        </div>
                        <p className=' mt-4 text-gray-500 font-light text-base'>{data.step1_des}</p>
                    </div>
                </div>
                <div data-aos="fade-up" className=' w-2/5 mx-auto my-5'>
                    <img src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/628288c5cd3e84f1470a378c_line_right.svg" alt="" />
                </div>
                <div className='2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center justify-center 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12 sm:space-x-12 xs:space-x-0'>
                    <div data-aos="fade-right" className='2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/2 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center'>
                        <div className='2xl:flex xl:flex lg:flex md:flex sm:flex xs:block  2xl:items-center xl:items-center lg:items-center md:items-start sm:items-center '>
                            <span className=' ring-1 rounded-full px-4 py-2 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4'>2</span>
                            <span className=' 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl font-sans font-bold text-slate-600 xs:block'>{data.step2_title}</span>
                        </div>
                        <p className=' mt-4 text-gray-500 font-light text-base 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4'>{data.step2_des}</p>
                    </div>
                    <div data-aos="fade-left" className='2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-2/5 xs:w-full bg-indigo-100  rounded-2xl p-6'>
                        <img className=' ring ring-indigo-500 rounded-2xl' src={'/storage/howitworks/'+data.step2_image} alt="" />

                    </div>
                </div>
                <div data-aos="fade-up" className=' w-2/5 mx-auto my-5'>
                    <img src="https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/628288c5cd3e84727f0a378f_line_left.svg" alt="" />
                </div>
                <div  data-aos="fade-right" className='2xl:ml-40 xl:ml-40 lg:ml-40 md:ml-40 sm:ml-24' >
                    <div className='2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center'>
                        <span className=' ring-1 rounded-full px-4 py-2 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4'>3</span>
                            <span className=' 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-md font-sans font-bold text-slate-600 xs:block'>{data.step3_title}</span>
                        </div>
                        <p className='2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center mt-4 text-gray-500 font-light text-base'>{data.step3_des}</p>
                </div>
            </div>
        </>
    )
}
