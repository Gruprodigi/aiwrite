import '../../../css/editor.css'
import App from "@/Components/user/layout/app";
import { Head, Link } from "@inertiajs/inertia-react";
import 'quill/dist/quill.snow.css';
import Sidebar from '@/Components/user/layout/partials/sidebar';
import moment from 'moment/moment';
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';
import Pagination from '@/Components/user/Pagination';

export default function Dashboard({ openAi_api_key, documents, logo, langs })
{
    const [ modalStatus, setModalStatus ] = useState()
    const [ documentName, setDocumentName ] = useState()
    const [ error, setError ] = useState({
        param: '',
        msg: ''
    })
    const [ documentId, setDocumentId ] = useState()

    const modalShow = (name, id) => {
        setModalStatus(true)
        setDocumentName(name)
        setDocumentId(id)
    }

    const onHandleSubmit = (e) => {
        e.preventDefault()
        if(!documentName)
        {
            return setError({
                param: 'rename',
                msg: 'The Document Name Field is Required'
            })
        }

        Inertia.put(`/user/rename/${documentId}/file`,{
            name: documentName
        })

        setModalStatus(false)


    }


    const deleteDocument = (id) => {
        if (window.confirm('Are you sure you want to delete this document?')) {
            Inertia.delete(`/user/file/delete/`+id)
        }
    }

    const onFavoriteClick = (id) => {
        Inertia.post('/user/file/favorite/'+id, {
            'id': id
        });
    }



    const new_document = () => {
        Inertia.get('/user/document/create',{
            data: JSON.stringify('')
        });
    }

    const get_content = (data) => {
        // console.log(data)
    }

    return (
        <>
            <Head>
                <title>User Dashboard</title>
            </Head>
            <App logo={logo}>
                <div className="2xl:flex xl:flex lg:flex md:block sm:block">
                    {/* sidebar area start */}
                    <Sidebar apiKey={openAi_api_key} content={get_content} langs={langs} />
                    {/* sidebar area end */}
                    <div className="w-full min-sidebar-custom-height overflow-y-scroll relative">
                        <div className='px-8 flex items-center justify-between border-b border-slate-200 py-4'>
                            <h5 className=' text-slate-500 font-semibold text-lg'>Document Lists</h5>
                            <div className='flex items-center'>
                                <Link href='?favorite=all' className='flex items-center mr-8 text-base text-slate-600 font-semibold'><i className="ri-star-s-fill text-slate-500 text-xl mr-1"></i> Favorites</Link>
                                <a onClick={new_document} className='flex items-center text-base text-slate-600 font-semibold cursor-pointer'><i className="ri-file-add-line mr-1 text-slate-500 text-md mr-1"></i> New Document</a>
                            </div>
                        </div>

                        {
                            documents.data.length > 0 ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr className='text-sm text-slate-500'>
                                            <th scope="col" className="py-4 px-8">
                                                Name
                                            </th>
                                            <th scope="col" className="py-4 px-8">
                                                Words
                                            </th>
                                            <th scope="col" className="py-4 px-8">
                                                Modified
                                            </th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-base'>
                                        {documents.data.map((value, index) => (
                                        <tr key={index} className="bg-white border-b">
                                            <td className='py-3 px-8'>
                                                <Link href={`/user/file/${value.slug}`}><span className='flex items-center'><i className="ri-file-text-fill text-lg text-slate-500 mr-2"></i> <span className='text-gray-900'>{value.name}</span></span></Link>
                                            </td>
                                            <td className="py-3 px-12">
                                                {value.count}
                                            </td>
                                            <td className="py-3 px-8">
                                                { moment(value.updated_at).format('lll') }
                                            </td>
                                            <td className="py-3 px-8">
                                            <a onClick={() => onFavoriteClick(value.id)} className=' cursor-pointer'><i className={value.is_favourite === 1 ?  'ri-star-fill text-indigo-500 text-base' : 'ri-star-fill text-base'}></i></a>
                                            </td>
                                            <td className=''>
                                                <div className='group transition-all delay-100'><i className="ri-more-2-fill text-xl cursor-pointer"></i>
                                                <div className='text-left absolute z-50 right-0 w-52 bg-white rounded divide-y divide-gray-100 custom-shadow hidden group-hover:block transition-all delay-100'>
                                                    <ul className="py-3 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
                                                    <li>
                                                        <a onClick={() => modalShow(value.name, value.id)} className="block py-2 px-5 hover:bg-gray-100 cursor-pointer "><span className='flex items-center'><i className="ri-edit-line mr-2"></i> <span>Rename</span></span></a>
                                                    </li>
                                                    <li>
                                                        <Link href={`/user/file/`+value.slug} className="block py-2 px-5 hover:bg-gray-100"><span className='flex items-center'><i className="ri-file-edit-line mr-2"></i> <span>Edit Document</span></span></Link>
                                                    </li>
                                                    <li>
                                                        <a onClick={() => deleteDocument(value.id)} className="block py-2 px-5 hover:bg-gray-100  cursor-pointer"><span className='flex items-center'><i className="ri-delete-bin-line mr-2"></i> <span>Delete Document</span></span></a>
                                                    </li>
                                                    </ul>
                                                </div>
                                                </div>
                                            </td>
                                        </tr>
                                        ))}

                                    </tbody>
                                </table>
                                <div className=' float-right pr-2 mb-12'>
                                    <Pagination className="mt-6" links={documents.links} />
                                </div>
                            </div>
                            ) : (
                                <div className=' flex items-center justify-center min-document-custom-height'>
                                    <div className='text-center'>
                                        <svg className="text-8xl fill-slate-200 font-light inline-block" xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                                        </svg>
                                        <p className='  text-gray-300 mt-5 text-xl'>No Document Found. Create a <a onClick={new_document} className='cursor-pointer text-indigo-300 font-normal hover:text-indigo-500 transition delay-75'>New Document</a></p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </App>

            <div className={modalStatus ? 'fixed z-10 inset-0 overflow-y-auto' : 'hidden'}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <form onSubmit={onHandleSubmit}>
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        {/* Modal Header */}
                                        <h3 className="text-lg leading-6 text-gray-600 font-semibold" id="modal-headline">
                                            Rename Document Name
                                        </h3>
                                        {/* Modal Body */}
                                        <div className="mt-2">
                                            <div className="mt-7">
                                                <label className="text-gray-500 font-normal text-base mb-4">Document Name</label>
                                                <input onChange={(e) => setDocumentName(e.target.value)} type="text" value={documentName || ''} placeholder="Enter Document Name" className=" bg-user-dashboard rounded-md px-4 h-12 w-full mt-2 placeholder:text-sm placeholder:font-light focus:outline-none border border-slate-300 focus:outline-0 focus:shadow-none" />
                                                {
                                                    error && error.param === 'rename' && (
                                                        <span className={' text-red-500'}>{error.msg}</span>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Update Name
                                </button>
                                <button onClick={() => setModalStatus(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


