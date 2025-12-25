import { Head, Link } from "@inertiajs/inertia-react"
import { useState } from "react"

export default function Header({ favicon, logo, button_title, button_url, menuitems })
{

    const [toogleMenu, setToogleMenu] = useState(false)

    return (
        <>
            <Head>
                {/* favicon */}
                <link rel="icon" type="image/png" href={favicon} />
            </Head>
            <div className=" container mx-auto pt-8">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link href='/'>
                            <img className='2xl:h-9 xl:h-9 lg:h-9 md:h-9 sm:h-9 xs:h-7' src={'/storage/'+logo} alt="logo" />
                        </Link>
                        <ul className='ml-12 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden'>
                        {
                            menuitems.menuitems.map((value, index) => (
                                <li key={index} className='relative group inline-block px-5 lg:px-3 hover:text-indigo-500 font-light text-slate-900 text-lg'>
                                    <Link href={JSON.parse(value.data).url} className='flex items-center'><span>{value.name}</span> { value.childs != '' && <i className="ri-arrow-down-s-line flex text-xl pl-2"></i>  }
                                    </Link>
                                    {
                                        value.childs != '' && (
                                            <ul className="absolute group-hover:block hidden w-52 shadow-lg px-5 py-4 rounded-md group-hover:transition group-hover:duration-500 opacity-100 bg-white">
                                                {
                                                    value.childs.map((child, index) => (
                                                        <li key={index} className='relative group font-light text-slate-500 hover:text-indigo-500 text-base py-2'>
                                                            <Link href={JSON.parse(child.data).url}>{ child.name }</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        )
                                    }

                                </li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className=" flex items-center">

                        <Link href='/login' className=' font-normal text-lg text-slate-600 mr-5 2xl:block xl:block lg:block md:block sm:block xs:hidden'>Login</Link>
                        <Link href={button_url} className=' bg-indigo-500 text-white rounded-full px-10 py-4 2xl:block xl:block lg:block md:block sm:block xs:hidden'>{button_title}</Link>
                        <a className="2xl:hidden xl:hidden lg:hidden md:block sm:block border px-4 py-1 rounded-lg ml-5 text-3xl" onClick={() => setToogleMenu(!toogleMenu)}><i className="ri-align-justify"></i></a>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div className={toogleMenu ? 'block bg-white shadow-lg left-0 top-0 bottom-0 w-1/3 md:w-1/3 sm:w-1/2 xs:w-full overflow-scroll fixed z-10' : 'hidden'}>
                <Link href='/'>
                    <img className='h-9 text-center mx-auto mt-12' src={'/storage/'+logo} alt="" />
                </Link>

                <ul className=' mt-8 mx-5'>
                {
                    menuitems.menuitems.map((value, index) => (
                        <li key={index} className='relative group px-0 border-b border-slate-200 py-4 lg:px-3 hover:text-indigo-500 font-normal text-slate-900 text-lg'>
                            {
                                value.childs != '' ? (
                                    <a className='flex items-center justify-between'><span>{value.name}</span> { value.childs != '' && <i className="ri-arrow-down-s-line flex justify-end text-xl pl-2"></i>  }
                                    </a>
                                ) : (
                                    <Link href={JSON.parse(value.data).url} className='flex items-center justify-between'><span>{value.name}</span>
                                    </Link>
                                )
                            }
                            {
                                value.childs != '' && (
                                    <ul className="group-hover:block hidden py-1 rounded-md group-hover:transition group-hover:duration-500 opacity-100 bg-white">
                                        {
                                            value.childs.map((child, index) => (
                                                <li key={index} className='relative group px-0 border-b px-5 last:border-none last:pb-0 border-slate-200 font-light text-slate-500 hover:text-indigo-500 text-base py-3'>
                                                    <Link href={JSON.parse(child.data).url}>{ child.name }</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }

                        </li>
                    ))
                }
                </ul>
            </div>
        </>

    )
}
