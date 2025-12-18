import { Link } from "@inertiajs/inertia-react";

export default function Navbar({ logo })
{
    return (
        <div className=" w-full bg-indigo-500 sticky top-0 z-50">
            <div className="mx-5">
                <div className="flex items-center py-4 justify-between">

                    <div className="flex items-center">
                        <div className=" mr-8">
                            <Link href="/user/dashboard">
                                <img className="filter-invert h-7" src={'/storage/'+logo} alt="" />
                            </Link>
                        </div>
                        <Link href='/user/dashboard' className="flex items-center text-slate-200 text-lg font-medium border-r border-slate-400 pr-6 mr-6"><span className=" flex items-center"><i className="ri-home-3-line mr-1 text-lg"></i><span>Dashboard</span></span></Link>
                        <Link className="flex items-center text-slate-200 text-lg font-medium" href="/user/account"><i className="ri-user-line mr-1 text-base"></i>Account</Link>
                    </div>
                    <div>
                        <div className="flex item-center">
                            <Link href="/contact"><i className="ri-question-line text-white text-xl"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
