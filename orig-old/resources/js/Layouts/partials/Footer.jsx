export default function Footer({ copyright, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems })
{
    return (
        <>
            <div data-aos="fade-up" className='bg-indigo-50 container mx-auto mb-12 rounded-3xl'>
                <div className=' 2xl:flex xl:flex lg:flex md:flex sm:grid sm:grid-cols-2 xs:grid-cols-1 sm:gap-12 xs:gap-12 justify-between 2xl:mx-28 xl:mx-28 lg:mx-28 md:mx-10 sm:mx-16 xs:mx-10 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-20 sm:pt-20 xs:pt-10 pb-10 border-b border-indigo-100'>
                    <div className='2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-12'>
                        <h5 className='text-slate-700 font-medium text-2xl mb-8'>{footer_first_menuitems.name}</h5>
                        <ul>
                            {
                                footer_first_menuitems.menuitems.map((value, index) => (
                                    <li key={index} className=' mb-4 font-light text-lg '><a href={JSON.parse(value.data).url}>{value.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-12'>
                        <h5 className=' text-slate-700 font-medium text-2xl mb-8'>{footer_second_menuitems.name}</h5>
                        <ul>
                            {
                                footer_second_menuitems.menuitems.map((value, index) => (
                                    <li key={index} className=' mb-4 font-light text-lg '><a href={JSON.parse(value.data).url}>{value.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-12'>
                        <h5 className=' text-slate-700 font-medium text-2xl mb-8'>{footer_third_menuitems.name}</h5>
                        <ul>
                            {
                                footer_third_menuitems.menuitems.map((value, index) => (
                                    <li key={index} className=' mb-4 font-light text-lg '><a href={JSON.parse(value.data).url}>{value.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className=''>
                        <h5 className='text-slate-700 font-medium text-2xl mb-8'>{footer_four_menuitems.name}</h5>
                        <ul>
                            {
                                footer_four_menuitems.menuitems.map((value, index) => (
                                    <li key={index} className=' mb-4 font-light text-lg '><a href={JSON.parse(value.data).url}>{value.name}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className=' text-center py-8'>
                    <p className=' text-slate-600 text-lg font-normal'>{copyright}</p>
                </div>
            </div>
        </>
    )
}
