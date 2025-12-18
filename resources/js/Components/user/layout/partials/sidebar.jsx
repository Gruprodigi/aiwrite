import { useEffect, useState } from "react";
import InputArea from "../../editor/Inputarea";
import Select from "../../editor/Select";
import ShortText from "../../editor/ShortText";
import Textarea from "../../editor/Textarea";
import { Configuration, OpenAIApi } from "openai";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import Swal from "sweetalert2";


export default function Sidebar(props){

    // OpenAi Configuration
    const configuration = new Configuration({
        apiKey: props.apiKey,
    });

    const openai = new OpenAIApi(configuration);

    const [ useCase, setUseCase ] = useState('blog_idea');
    const [ variants, setVariants ] = useState(1)
    const [ level, setLevel ] = useState(0.7)
    const [ status, setStatus ] = useState('normal')
    const [lang, setLang] = useState('English')

    // Error Message
    const [ error, setError ] = useState({
        param: '',
        msg: ''
    })


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

    // Blog Idea
    const [ keyword, setKeyword ] = useState()

    // Blog Writing
    const [ topic, setTopic ] = useState()
    const [ sectionKeyword, setSectionKeyword ] = useState()

    // Business Ideas
    const [ interest, setInterest ] = useState()
    const [ skills, setSkills ] = useState()

    // Cover Letter
    const [ role, setRole ] = useState()
    const [ jobSkills, setJobSkills ] = useState()

    // social Media Ads Product Des
    const [ productName, setProductName ] = useState()
    const [ productDes, setProductDes ] = useState()

    //  Google Search Ads
    const [ googleProductName, setGoogleProductName ] = useState()
    const [ googleProductDes, setGoogleProductDes ] = useState()
    const [ googleTargetKeyword, setGoogleTargetKeyword ] = useState()

    // Post & Caption Idea
    const [ postTopic, setPostTopic ] = useState()

    // Product Description
    const [ desProductName, setDesProductName ] = useState()
    const [ desProductDes, setDesProductDes ] = useState()

    // Seo Meta Description
    const [ seoTitle, setSeoTitle ] = useState()

    // Seo Meta Title
    const [ seoTargetKeyword, setSeoTargetKeyword ] = useState()

    // Video Description
    const [ videoTitle, setVideoTitle ] = useState()

    // Video Idea
    const [ videoKeyword, setVideoKeyword ] = useState()

    const handleCase = (e) => {
        setUseCase(e.target.value)

        sessionStorage.setItem('topic', e.target.value)
    }

    useEffect(() => {
        if (sessionStorage.hasOwnProperty('topic')) {
            setUseCase(sessionStorage.getItem('topic'))
        }

        if(props.langs.length > 0)
        {
            setLang(props.langs[0].name)
        }

    }, [props.langs])

    const onHandleSubmit = async(e) => {
        e.preventDefault()
        setStatus('progress')
        setError({ param: '', msg: '' })

        if(useCase === 'blog_idea')
        {
            if(!keyword)
            {
                setStatus('normal')
                return setError({
                    param: 'keyword',
                    msg: 'The Primary Keyword Field Is Required'
                })

            }

            var prompt = `Write ${variants} Blog Idea & Outline About `+keyword;

        }else if(useCase === 'blog_writing'){

            if(!topic)
            {
                setStatus('normal')
                return setError({
                    param: 'topic',
                    msg: 'The Section Topic Field Is Required'
                })
            }

            var prompt = `Write ${variants} blog section about ${topic} With ${sectionKeyword} keywords`;

        }else if(useCase === 'business_idea')
        {
            if(!interest)
            {
                setStatus('normal')
                return setError({
                    param: 'interest',
                    msg: 'The Interest Field Is Required'
                })
            }

            if(!skills)
            {
                setStatus('normal')
                return setError({
                    param: 'skills',
                    msg: 'The Skills Field Is Required'
                })
            }

            var prompt = `Give me ${variants} business Idea about ${interest} using ${skills} skills`;


        }else if(useCase === 'cover_letter')
        {

            if(!role)
            {
                setStatus('normal')
                return setError({
                    param: 'role',
                    msg: 'The Job Role Field Is Required'
                })
            }

            if(!jobSkills)
            {
                setStatus('normal')
                return setError({
                    param: 'jobSkills',
                    msg: 'The Skills Field Is Required'
                })
            }

            var prompt = `Write me ${variants} cover letter for job. My Role is ${role} and my skills are ${jobSkills}`;

        }else if(useCase === 'social_ads')
        {
            if(!productName)
            {
                setStatus('normal')
                return setError({
                    param: 'productName',
                    msg: 'The Product Name Field Is Required'
                })
            }

            if(!productDes)
            {
                setStatus('normal')
                return setError({
                    param: 'productDes',
                    msg: 'The Product Description Field Is Required'
                })
            }

            var prompt = `Write me ${variants} social media ads product description. The Product name is ${productName} and the product title is ${productDes}`;


        }else if(useCase === 'google_ads')
        {

            if(!googleProductName)
            {
                setStatus('normal')
                return setError({
                    param: 'googleProductName',
                    msg: 'The Product Name Field Is Required'
                })
            }

            if(!googleProductDes)
            {
                setStatus('normal')
                return setError({
                    param: 'googleProductDes',
                    msg: 'The Product Description Field Is Required'
                })
            }

            if(!googleTargetKeyword)
            {
                setStatus('normal')
                return setError({
                    param: 'googleTargetKeyword',
                    msg: 'The Target Keyword Field Is Required'
                })
            }

            var prompt = `Write ${variants} google search ads. The Product Name is ${googleProductName}. The Product title is ${googleProductDes} and the product target keyword is ${googleTargetKeyword}.`;

        }else if(useCase === 'post_idea')
        {
            if(!postTopic)
            {
                setStatus('normal')
                return setError({
                    param: 'postTopic',
                    msg: 'The Post Topic Field Is Required'
                })
            }

            var prompt = `Write me ${variants} post & Caption Idea about ${postTopic}`;

        }else if(useCase === 'product_des')
        {

            if(!desProductName)
            {
                setStatus('normal')
                return setError({
                    param: 'desProductName',
                    msg: 'The Product Name Field Is Required'
                })
            }

            if(!desProductDes)
            {
                setStatus('normal')
                return setError({
                    param: 'desProductDes',
                    msg: 'The Product Description Field Is Required'
                })
            }

            var prompt = `Write me ${variants} Product Description. My Product Name is ${desProductName}. And My Product is ${desProductDes}`;


        }else if(useCase === 'seo_meta')
        {
            if(!seoTitle)
            {
                setStatus('normal')
                return setError({
                    param: 'seoTitle',
                    msg: 'The Seo Title Field Is Required'
                })
            }

            var prompt = `Write me ${variants} SEO Meta Description. The SEO Meta Title is ${seoTitle}`;

        }else if(useCase === 'seo_title')
        {
            if(!seoTargetKeyword)
            {
                setStatus('normal')
                return setError({
                    param: 'seoTargetKeyword',
                    msg: 'The Target Keyword Field Is Required'
                })
            }

            var prompt = `Write me ${variants} SEO Meta Title. The target Keyword is ${seoTargetKeyword}`;

        }else if(useCase === 'video_des')
        {
            if(!videoTitle)
            {
                setStatus('normal')
                return setError({
                    param: 'videoTitle',
                    msg: 'The Video Title Field Is Required'
                })
            }

            var prompt = `Write me ${variants} video description. My video title is ${videoTitle}`;

        }else if(useCase === 'video_idea')
        {
            if(!videoKeyword)
            {
                setStatus('normal')
                return setError({
                    param: 'videoKeyword',
                    msg: 'The Keyword Field Is Required'
                })
            }

            var prompt = `Write me ${variants} video idea with target keyword ${videoKeyword}`;
        }

        // check the total word count
        await axios.get('/user/plan/check')
        .then( async (response) => {

            if(lang == 'English')
            {
                var our_prompt = prompt;
            }else{
                var our_prompt =  `Translate this into ${lang}: ` + prompt
            }

            const completion = await axios.post('/user/ai/generate', {

                  prompt: our_prompt,
                  temperature: Math.floor(parseFloat(level)),
                  max_tokens: 2566

            })

            setStatus('normal')

            await props.content({
                get_content: completion.data.choices[0].text,
                fileId: props.fileId ? props.fileId : ''
            })

            if(!props.fileId)
            {
                var wordCount = completion.data.choices[0].text.split(' ').length
                Inertia.post('file/create', {
                    data: JSON.stringify(completion.data.choices[0].text),
                    wordCount: wordCount
                });
            }
        })
        .catch(function (error) {
            if(error.response.data.errors)
            {
                Inertia.replace('/user/plan')
                Toast.fire({
                    icon: 'error',
                    title: 'Please upgrade your plan!'
                })
            }else{
                Toast.fire({
                    icon: 'error',
                    title: 'Something Went Wrong! Please Contact with support.'
                })
            }

            setStatus('normal')
        })

    }



    return (
        <>
            <div className="2xl:w-1/3 xl:w-1/3 bg-user px-5 py-6 border-r border-slate-200 2xl:min-sidebar-custom-height xl:min-sidebar-custom-height lg:min-sidebar-custom-height overflow-x-scroll">
                <form onSubmit={onHandleSubmit}>
                    <div className="mb-5">
                        <label className=" text-slate-700 text-base font-normal">Choose Use Case</label>
                        <select onChange={(e) => handleCase(e)} className="w-full rounded-lg h-12 mt-2 border border-gray-300 px-5 text-md" value={useCase}>
                            <option value='blog_idea'>Blog Idea & Outline</option>
                            <option value='blog_writing'>Blog Section Writing</option>
                            <option value='business_idea'>Business Ideas</option>
                            <option value='cover_letter'>Cover Letter</option>
                            <option value='social_ads'>Facebook, Twitter, Linkedin Ads</option>
                            <option value='google_ads'>Google Search Ads</option>
                            <option value='post_idea'>Post & Caption Ideas</option>
                            <option value='product_des'>Product Description</option>
                            <option value='seo_meta'>SEO Meta Description</option>
                            <option value='seo_title'>SEO Meta Title</option>
                            <option value='video_des'>Video Description</option>
                            <option value='video_idea'>Video Idea</option>
                        </select>
                    </div>
                    {
                        useCase === 'blog_idea' && (
                            <div className="mb-5">
                                <InputArea name={'keyword'} onHandleChange={(e) => setKeyword(e.target.value)} value={keyword} label={'Primary Keyword'} placeholder='AI Writing Assistant' />
                                {
                                    error && error.param === 'keyword' && (
                                        <span className=" text-red-500 text-sm">{error.msg}</span>
                                    )
                                }
                            </div>
                        )
                    }
                    {
                        useCase === 'blog_writing' && (
                            <>
                                <div className="mb-5">
                                    <ShortText onHandleChange={(e) => setTopic(e.target.value)} label={'Section Topic'} placeholder='Role of AI Writers in the Future of Copywriting' />
                                    {
                                        error && error.param === 'topic' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                                <div className="mb-5">
                                    <ShortText onHandleChange={(e) => setSectionKeyword(e.target.value)} label={'Section Keywords (Optional)'} placeholder='ai writer, blog generator, best writing software' />
                                    {
                                        error && error.param === 'sectionKeyword' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>

                            </>
                        )
                    }
                    {
                        useCase === 'business_idea' && (
                            <>
                                <div className="mb-5">
                                    <InputArea onHandleChange={(e) => setInterest(e.target.value)} label={'Interest'} placeholder='Marketing Saas' />
                                    {
                                        error && error.param === 'interest' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                                <div className="mb-5">
                                    <ShortText onHandleChange={(e) => setSkills(e.target.value)} label={'Skills'} placeholder='copywriting, marketing, product development, AI' />
                                    {
                                        error && error.param === 'skills' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>

                            </>
                        )
                    }
                    {
                        useCase === 'cover_letter' && (
                            <>
                                <div className="mb-5">
                                    <InputArea onHandleChange={(e) => setRole(e.target.value)} label={'Job Role'} placeholder='Digital Marketer'/>
                                    {
                                        error && error.param === 'role' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                                <div className="mb-5">
                                    <InputArea onHandleChange={(e) => setJobSkills(e.target.value)} label={'Job Skills'} placeholder='bog writing, SEO, social media, email'/>
                                    {
                                        error && error.param === 'jobSkills' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>

                            </>
                        )
                    }
                    {
                        useCase === 'social_ads' && (
                            <>
                                <div className="mb-5">
                                    <InputArea onHandleChange={(e) => setProductName(e.target.value)} label={'Product Name'} placeholder={'AIWrite'} />
                                    {
                                        error && error.param === 'productName' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                                <div className="mb-5">
                                    <Textarea onHandleChange={(e) => setProductDes(e.target.value)} label={'Product Description'} placeholder='AiWrite is an AI-powered writing tool that helps you create high-quality content, in just a few seconds, at a fraction of the cost!' />
                                    {
                                        error && error.param === 'productDes' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>

                            </>
                        )
                    }
                    {
                        useCase === 'google_ads' && (
                            <>
                                <div className="mb-5">
                                    <InputArea onHandleChange={(e) => setGoogleProductName(e.target.value)} label={'Product Name'} placeholder={'AIWrite'}/>
                                    {
                                        error && error.param === 'googleProductName' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                                <div className="mb-5">
                                    <Textarea onHandleChange={(e) => setGoogleProductDes(e.target.value)} label={'Product Description'} placeholder='AiWrite is an AI-powered writing tool that helps you create high-quality content, in just a few seconds, at a fraction of the cost!' />
                                    {
                                        error && error.param === 'googleProductDes' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                                <div className="mb-5">
                                    <InputArea onHandleChange={(e) => setGoogleTargetKeyword(e.target.value)} label={'Target Keyword'} placeholder={'Content Writing'}/>
                                    {
                                        error && error.param === 'googleTargetKeyword' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                            </>
                        )
                    }
                    {
                        useCase === 'post_idea' && (
                            <>
                                <div className="mb-5">
                                    <ShortText onHandleChange={(e) => setPostTopic(e.target.value)} label={'Post Topic'} placeholder='Inspiring community members to share their voices and ideas openly' />
                                    {
                                        error && error.param === 'postTopic' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                            </>
                        )
                    }
                    {
                        useCase === 'product_des' && (
                            <>
                                <div className="mb-5">
                                    <InputArea onHandleChange={(e) => setDesProductName(e.target.value)} label={'Product Name'} placeholder={'AIWrite'}/>
                                    {
                                        error && error.param === 'desProductName' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                                <div className="mb-5">
                                    <Textarea onHandleChange={(e) => setDesProductDes(e.target.value)} label={'About Product'} placeholder='AiWrite is an AI-powered writing tool that helps you create high-quality content, in just a few seconds, at a fraction of the cost!' />
                                    {
                                        error && error.param === 'desProductDes' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>

                            </>
                        )
                    }
                    {
                        useCase === 'seo_meta' && (
                            <>
                                <div className="mb-5">
                                    <ShortText onHandleChange={(e) => setSeoTitle(e.target.value)} label={'Page Meta Title'} placeholder='AiWrite - Best AI Writer, Content Generator & Writing Assistant' />
                                    {
                                        error && error.param === 'seoTitle' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                            </>
                        )
                    }
                    {
                        useCase === 'seo_title' && (
                            <>
                                <div className="mb-5">
                                    <InputArea onHandleChange={(e) => setSeoTargetKeyword(e.target.value)} label={'Target Keywords'} placeholder='AI writing assistant, content generator' />
                                    {
                                        error && error.param === 'seoTargetKeyword' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                            </>
                        )
                    }
                    {
                        useCase === 'video_des' && (
                            <>
                                <div className="mb-5">
                                    <ShortText onHandleChange={(e) => setVideoTitle(e.target.value)} label={'Video Title'} placeholder='How to Use AI Writers to Create High-Quality Blogs in Minutes' />
                                    {
                                        error && error.param === 'videoTitle' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>

                            </>
                        )
                    }
                    {
                        useCase === 'video_idea' && (
                            <>
                                <div className="mb-5">
                                    <InputArea onHandleChange={(e) => setVideoKeyword(e.target.value)} label={'Keywords'} placeholder='AI Writing Assistants' />
                                    {
                                        error && error.param === 'videoKeyword' && (
                                            <div className=" text-red-500 text-sm">{error.msg}</div>
                                        )
                                    }
                                </div>
                            </>
                        )
                    }
                    <div className="mb-5">
                        <div className="flex items-center justify-between space-x-4">
                            <div className=" w-1/2">
                                <Select label={'Number Of Variants'} onHandleChange={(e) => setVariants(e.target.value)} value={variants}>
                                    <option value='3'>3 Variants</option>
                                    <option value='2'>2 Variants</option>
                                    <option value='1'>1 Variants</option>
                                </Select>
                            </div>
                            <div className=" w-1/2">
                                <Select label={'Creativity Level'} value={level} onHandleChange={(e) => setLevel(e.target.value)}>
                                    <option value={0.7}>Optimal</option>
                                    <option value={0}>None (more factual)</option>
                                    <option value={0.1}>Low</option>
                                    <option value={0.6}>Medium</option>
                                    <option value={0.9}>High</option>
                                    <option value={1}>Max (less factual)</option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    {

                        props.langs.length > 0 && (
                            <div className="mb-4">
                                <Select label={'Select Language'} value={lang} onHandleChange={(e) => setLang(e.target.value)}>
                                    {
                                        props.langs.map((value, index) => (
                                            <option key={index} value={value.name}>{value.name}</option>
                                        ))
                                    }
                                </Select>
                            </div>
                        )
                    }

                    {
                        status === 'progress' && (
                            <button type="button" disabled className=" bg-indigo-500 text-white text-center w-full rounded-lg py-3 text-lg">
                            <svg role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                                </svg>
                                Writing...
                            </button>
                        )
                    }

                    {
                        status === 'normal' && (
                            <button type="submit" className=" bg-indigo-500 text-white text-center w-full rounded-lg py-3 text-lg"><span className="flex items-center justify-center"><i className="ri-pen-nib-line text-xl mr-2"></i> <span>Write For Me</span></span></button>
                        )
                    }

                </form>
            </div>
        </>
    )
}
