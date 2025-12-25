import FrontendApp from "@/Layouts/Frontentapp";
import { Head, Link } from "@inertiajs/inertia-react";
import moment from "moment";

export default function Blogs({blogs, hero, settings, menuitems, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems, seo_blog }){


    const wordLimit = (str, limit) => {
        var words = str.split(" ");
        if (words.length > limit) {
          return words.slice(0, limit).join(" ") + "...";
        } else {
          return str;
        }
      }

    return (
        <>
            <Head>
                <title>{seo_blog.name}</title>
                <meta name='description' content={JSON.parse(seo_blog.seometa.value).meta_description}/>
                <meta name='keywords' content={JSON.parse(seo_blog.seometa.value).meta_tag}/>

                <meta name="twitter:title" content={JSON.parse(seo_blog.seometa.value).twitter_title}></meta>
            </Head>
            <FrontendApp settings={settings} menuitems={menuitems} hero={hero} footer_first_menuitems={footer_first_menuitems} footer_second_menuitems={footer_second_menuitems} footer_third_menuitems={footer_third_menuitems} footer_four_menuitems={footer_four_menuitems}  >
                {/* breadcrumb area start */}
                <div className=" py-40 mt-8 bg-indigo-50">
                    <div className="text-center">
                        <h2 className="2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-bold text-slate-600">Blog Lists</h2>
                        <nav className="flex justify-center px-5 py-3 text-gray-700 rounded-lg" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li>
                                <div className="flex items-center">
                                    <a href="#" className="ml-1 text-lg font-light text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Home</a>
                                </div>
                                </li>
                                <li aria-current="page">
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                    <span className="ml-1 text-lg font-light text-gray-400 md:ml-2 dark:text-gray-400">Blog Lists</span>
                                </div>
                                </li>
                            </ol>
                        </nav>

                    </div>
                </div>
                {/* breadcrumb area end */}
                {/* blog lists area start */}
                <div className="container mx-auto my-40">
                    <div className=" grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        blogs.data.map((value, index) => (
                            <div key={index} className=" shadow rounded-lg p-3">
                                <Link href={'/blog/'+value.slug}>
                                    <img className=" rounded-lg h-80 object-cover w-full" src={'/storage/blog/'+JSON.parse(value.blogmeta.value).preview} alt="" />
                                </Link>
                                <div className=" px-5 py-8 pt-5">
                                    <div className=" flex items-center mb-1 text-slate-500">
                                        <i className="ri-calendar-line mr-1"></i> <span> {moment(value.created_at).format('LL')}</span>
                                    </div>
                                    <Link href={'/blog/'+value.slug}><h2 className=" font-bold font-sans text-slate-600 text-2xl">{value.name}</h2></Link>
                                    <p className=" font-light text-slate-400 text-base leading-normal py-2 mb-4">{wordLimit(JSON.parse(value.blogmeta.value).short_content, 18)}</p>
                                    <Link href={'/blog/'+value.slug} className=" bg-indigo-500 text-white px-8 rounded-lg py-3 font-light text-base">Read More</Link>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                {/* blog lists area end */}
            </FrontendApp>
        </>

    )
}
