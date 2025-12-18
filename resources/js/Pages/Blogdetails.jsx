import FrontendApp from "@/Layouts/Frontentapp";
import moment from "moment";
import { FacebookShareButton, TwitterShareButton, PinterestShareButton, LinkedinShareButton } from "react-share";

export default function BlogDetails({ blog, url, hero, settings, menuitems, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems })
{
    return (
        <FrontendApp settings={settings} menuitems={menuitems} hero={hero} footer_first_menuitems={footer_first_menuitems} footer_second_menuitems={footer_second_menuitems} footer_third_menuitems={footer_third_menuitems} footer_four_menuitems={footer_four_menuitems}>
            {/* breadcrumb area start */}
            <div className=" py-40 mt-8 bg-indigo-50">
                <div className="text-center">
                    <h2 className=" 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-bold text-slate-600">{blog.name}</h2>
                    <nav className="flex justify-center px-5 py-3 text-gray-700 rounded-lg" aria-label="Breadcrumb">
                        <ol className="xs:hidden 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex sm:inline-flex items-center space-x-1 md:space-x-3">
                            <li>
                            <div className="flex items-center">
                                <a href="#" className="ml-1 text-lg font-light text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Home</a>
                            </div>
                            </li>
                            <li aria-current="page">
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <span className="ml-1 text-lg font-light text-gray-400 md:ml-2 dark:text-gray-400">{blog.name}</span>
                            </div>
                            </li>
                        </ol>
                    </nav>

                </div>
            </div>
            {/* breadcrumb area end */}
            <div className="container mx-auto my-40">
                <div className=" 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-full mx-auto 2xl:text-left xl:text-left md:text-left sm:text-left xs:text-center">
                    <img className=" w-full rounded-3xl" src={'/storage/blog/'+JSON.parse(blog.blogmeta.value).preview} alt="" />
                    <div className=" mt-8 flex items-center 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-start xs:justify-center mb-1 text-slate-500 text-lg">
                        <i className="ri-calendar-line mr-1"></i> <span> {moment(blog.created_at).format('LL')}</span>
                    </div>
                    <h2 className=" font-extrabold font-sans text-slate-600 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-4xl leading-tight">{blog.name}</h2>
                    <div className=" border-b mb-5 pb-8">
                        <p className=" mt-5 font-light text-slate-400 text-xl leading-normal py-2 mb-4">{JSON.parse(blog.blogmeta.value).short_content}</p>
                        <p className=" mt-5 font-light text-slate-400 text-xl leading-normal py-2 mb-4">{JSON.parse(blog.blogmeta.value).description}</p>
                    </div>
                    <div className=" flex items-center justify-end">
                        <FacebookShareButton url={url+'blog/'+blog.slug}>
                            <a href="#" className=" border border-indigo-500 rounded-full px-4 py-3 flex items-center ml-3 bg-gray-100"><i className=" text-base ri-facebook-fill text-indigo-500"></i></a>
                        </FacebookShareButton>
                        <TwitterShareButton url={url+'blog/'+blog.slug}>
                            <a href="#" className=" border border-indigo-500 rounded-full px-4 py-3 flex items-center ml-3 bg-gray-100"><i className=" text-base ri-twitter-fill text-indigo-500"></i></a>
                        </TwitterShareButton>
                        <LinkedinShareButton url={url+'blog/'+blog.slug} title={blog.name} summary={JSON.parse(blog.blogmeta.value).short_content} source={url+'blog/'+blog.slug}>
                         <a href="#" className=" border border-indigo-500 rounded-full px-4 py-3 flex items-center ml-3 bg-gray-100 text-indigo-500 text-base "><i className="ri-linkedin-box-fill"></i></a>
                        </LinkedinShareButton>
                        <PinterestShareButton url={url+'blog/'+blog.slug} media={url+'storage/blog/'+JSON.parse(blog.blogmeta.value).preview} description={JSON.parse(blog.blogmeta.value).short_content}>
                            <a href="#" className=" border border-indigo-500 rounded-full px-4 py-3 flex items-center ml-3 bg-gray-100"><i className=" text-base ri-pinterest-fill text-indigo-500"></i></a>
                        </PinterestShareButton>

                    </div>

                </div>

            </div>
        </FrontendApp>
    )
}
