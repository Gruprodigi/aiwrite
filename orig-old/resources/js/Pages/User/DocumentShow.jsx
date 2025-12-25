import App from "@/Components/user/layout/app";
import Sidebar from "@/Components/user/layout/partials/sidebar";
import '../../../css/editor.css'
import { Head, Link } from "@inertiajs/inertia-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useRef, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { writeText } from 'clipboard-polyfill';
import Swal from "sweetalert2";

export default function DocumentShow({ errors, document, openAi_api_key, logo, langs })
{
    const [ contentStatus, setContentStatus ] = useState(true)
    const messagesEndRef = useRef(null)



    const quillRef = useRef(null)


    const [quill, setQuill] = useState(null)

    useEffect(() => {
        setQuill(quillRef.current.editor);


    })

    if(quill)
    {
        quill.setContents([
            { insert: JSON.parse(document.data) }
        ]);


    }



    var Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })




    const copyToClipboard = () => {
        const data = quill.getText()
        console.log(data)
        writeText(data);

        Toast.fire({
            icon: 'success',
            title: 'Copy To Clipboard!'
        })
    }

    const saveContent = () => {
        var mainContents = quill.getContents();

        var wordCount = quill.getText().split(' ').length

        Inertia.post('create', {
            data: JSON.stringify(mainContents.ops[0].insert),
            fileId: document.id,
            wordCount: wordCount,
            type: 'save'
        });

        Toast.fire({
            icon: 'success',
            title: 'Content Successfully Updated'
        })
    }



    const get_content = (data) => {
        var delta = quill.getContents();

        quill.setContents([
            { insert: delta.ops[0].insert + data.get_content },
        ]);

        var mainContents = quill.getContents();
        var wordCount = data.get_content.split(' ').length

        Inertia.post('create', {
            data: JSON.stringify(mainContents.ops[0].insert),
            fileId: data.fileId,
            wordCount: wordCount
        });

        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        const scrollHeight = messagesEndRef.current.scrollHeight;
        const height = messagesEndRef.current.clientHeight;
        const maxScrollTop = scrollHeight - height;
        messagesEndRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;

    }

    return (
        <>
            <Head>
                <title>{document.name}</title>
            </Head>
            <App logo={logo}>
                <div className="2xl:flex xl:flex lg:flex md:block sm:block">
                    <Sidebar apiKey={openAi_api_key} content={get_content} fileId={document.id} langs={langs} />
                    <div className=" w-full">
                        <div className=" flex items-center align-middle justify-between px-5 border-b border-slate-200">
                            <div className="flex items-center py-3 w-11/12">
                                <Link href="/user/dashboard"><i className="ri-arrow-left-line text-2xl text-gray-600 mr-3"></i></Link>
                                <p className="text-gray-500 font-bold text-lg">{document.name}</p>
                            </div>
                            <div className=" float-right">

                            </div>
                        </div>
                        <div ref={messagesEndRef} className="w-full custom-editor-size">
                            <ReactQuill ref={quillRef} theme="snow" />
                        </div>
                    </div>
                </div>
                {
                    quill && quill.getText().length > 1 ? (
                        <div className=" absolute bottom-12 right-12 cursor-pointer">

                            <a onClick={copyToClipboard} className=" bg-indigo-500 text-white px-6 py-5 flex rounded-full"><i className="ri-file-copy-2-fill text-2xl"></i> </a>
                        </div>
                    ) : (
                        <div className=" absolute bottom-12 right-12 cursor-not-allowed">
                            <a className=" bg-slate-200 text-indigo-300 px-6 py-5 flex rounded-full"><i className="ri-file-copy-2-fill text-2xl"></i></a>
                        </div>
                    )
                }
            </App>
        </>
    )
}
