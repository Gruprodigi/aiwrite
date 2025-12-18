export default function Brand({ brands, title })
{

    return (
        <>
            <div className=' container mx-auto text-center mt-20 mb-32'>
                <h5 className=' text-slate-500 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg xs:text-sm font-light'>{title}</h5>
                <div className='flex justify-center w-full md:overflow-x-scroll sm:overflow-x-scroll xs:overflow-x-scroll items-center mt-3'>
                    {
                        brands.map((value, index) => (
                            <img key={index} className='px-8 h-12 opacity-30' src={'/storage/brand/'+value.name} alt="" />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
