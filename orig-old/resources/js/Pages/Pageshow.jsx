import FrontendApp from "@/Layouts/Frontentapp";
import { Head } from "@inertiajs/inertia-react";


export default function Pageshow(props) {
    return (
        <>
            <Head>
                <title>{props.page.name}</title>
                <meta name='description' content={JSON.parse(props.page.pagemeta.value).short_content}/>

                <meta name="twitter:title" content={props.page.name}></meta>
            </Head>
            <FrontendApp settings={props.settings} menuitems={props.menuitems} hero={props.hero} footer_first_menuitems={props.footer_first_menuitems} footer_second_menuitems={props.footer_second_menuitems} footer_third_menuitems={props.footer_third_menuitems} footer_four_menuitems={props.footer_four_menuitems}>
                {/* breadcrumb area start */}
                <div className=" py-40 mt-8 mb-24 bg-indigo-50">
                    <div className="text-center">
                        <h2 className=" 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-bold text-slate-600">{props.page.name}</h2>
                        <nav className="flex justify-center px-5 py-3 text-gray-700 rounded-lg" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li>
                                <div className="flex items-center">
                                    <a href="#" className="ml-1 text-lg font-light text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Home</a>
                                </div>
                                </li>
                                <li aria-current="page">
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                    <span className="ml-1 text-lg font-light text-gray-400 md:ml-2 dark:text-gray-400">{props.page.name}</span>
                                </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* breadcrumb area end */}
                {/* page area start */}
                <div className="container mx-auto mb-24">
                    <p className="mt-5 font-light text-slate-400 text-xl leading-normal py-2 mb-4">{JSON.parse(props.page.pagemeta.value).short_content}</p>
                    <p className="mt-5 font-light text-slate-400 text-xl leading-normal py-2 mb-4">{JSON.parse(props.page.pagemeta.value).description}</p>
                </div>
                {/* page area end */}
            </FrontendApp>
        </>

    )
}
