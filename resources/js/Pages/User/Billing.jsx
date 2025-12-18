import Sidebar from "@/Components/user/account/Sidebar";
import App from "@/Components/user/layout/app";
import { Head } from "@inertiajs/inertia-react";
import moment from "moment/moment";

export default function Billing({ transactions, currency, logo })
{

    return (
        <>
            <Head>
                <title>Payment History</title>
            </Head>
            <App logo={logo}>
                <div className="container mx-auto my-20">
                    <div className="2xl:flex lg:flex md:flex sm:block 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12">
                        <Sidebar />
                        <div className=" 2xl:w-3/4 xl:w-3/4 lg:w-3/4">
                            <div className="overflow-x-auto relative w-full">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-blue-50">
                                        <tr>
                                            <th scope="col" className="py-4 text-gray-500 font-bold text-md px-6">
                                                Date
                                            </th>
                                            <th scope="col" className="py-4 text-gray-500 font-bold text-md px-6">
                                                Trx Id
                                            </th>
                                            <th scope="col" className="py-4 text-gray-500 font-bold text-md px-6">
                                                Payment Method
                                            </th>
                                            <th scope="col" className="py-4 text-gray-500 font-bold text-md px-6">
                                                Price
                                            </th>
                                            <th scope="col" className="py-4 text-gray-500 font-bold text-md px-6">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            transactions.data.map((value, index) => (
                                                <tr key={index} className="bg-white border-b border-gray-100">
                                                    <td className="py-4 px-6">
                                                        {  moment(value.created_at).format('LL') }
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        { value.trx_id }
                                                    </td>
                                                    <td className="text-center">
                                                        { value.payment_method }
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        {currency}{value.amount}
                                                    </td>
                                                    <td className="py-4 px-6">
                                                        {
                                                            value.status === 'approved' ? (
                                                                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Paid </span>
                                                            ) : (
                                                                <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Failed </span>
                                                            )
                                                        }
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </App>
        </>
    )
}
