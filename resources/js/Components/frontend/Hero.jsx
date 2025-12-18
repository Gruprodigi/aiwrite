import { TypeAnimation } from 'react-type-animation'
import { Link } from '@inertiajs/inertia-react'

export default function Hero({ hero, usecases })
{

    return (
        <>
            <div className='mt-32 2xl:pb-32 xl:pb-32 lg:pb-32 md:pb-32 sm:pb-32 xs:pb-0 text-center 2xl:px-32 xl:px-32 lg:px-0 md:px-0'>
                    <h2 className=' text-slate-700 font-extrabold 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl font-sans leading-tight'>{hero.hero_title} <TypeAnimation
                        sequence={[
                            'Blog Idea & Outline.', // Types 'One'
                            1000, // Waits 1s
                            'Blog Section Writing.', // Deletes 'One' and types 'Two'
                            1000, // Waits 2s
                            'Business Ideas.', // Types 'Three' without deleting 'Two'
                            1000,
                            'Cover Letter.', // Types 'Three' without deleting 'Two'
                            1000,
                            'Facebook, Twitter Ads.', // Types 'Three' without deleting 'Two'
                            1000,
                            'Google Search Ads.', // Types 'Three' without deleting 'Two'
                            1000,
                            'Post & Caption Ideas.', // Types 'Three' without deleting 'Two'
                            1000,
                            'Product Description.', // Types 'Three' without deleting 'Two'
                            1000,
                            'SEO Meta Description.', // Types 'Three' without deleting 'Two'
                            1000,
                            'SEO Meta Title.', // Types 'Three' without deleting 'Two'
                            1000,
                            'Video Description.', // Types 'Three' without deleting 'Two'
                            1000,
                            'Video Idea.', // Types 'Three' without deleting 'Two'
                            1000,
                            () => {
                            // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        /></h2>
                <p className=' font-sans 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base xs:text-xs pt-5 2xl:px-32 xl:px-32 lg:px-32 md:px-32 sm:px-20 text-slate-500 2xl:mb-10 xl:mb-10 lg:mb-10 md:mb-10 sm:mb-10 xs:mb-5'>{hero.description}</p>
                <div>
                    <Link  href={hero.button_url} className=' bg-indigo-500 text-white 2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-16 xs:px-8 2xl:py-5 xl:py-5 lg:py-5 md:py-5 sm:py-5 xs:py-3 leading-normal rounded-full 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-sm'>{hero.button_title}</Link>
                    <div className='2xl:mt-6 xl:mt-6 lg:mt-6 md:mt-6 sm:mt-6 xs:mt-3 font-light text-sm text-slate-500'>No Credit Card Required.</div>
                </div>
                <div className=' mt-5'>
                    <img data-aos="zoom-in-up" className=' border-12 border-white rounded-3xl shadow-lg' src={'/storage/hero_img/'+hero.hero_img} alt="" />
                </div>
            </div>
        </>
    )
}
