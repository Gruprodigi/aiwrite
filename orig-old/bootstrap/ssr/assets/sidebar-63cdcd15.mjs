import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { useState, useEffect } from "react";
import { I as InputArea } from "./Inputarea-e249f414.mjs";
import { Configuration, OpenAIApi } from "openai";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import Swal from "sweetalert2";
const editor = "";
function Select({ label, name, value, className, onHandleChange, children }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("label", { className: " text-slate-700 text-base font-normal", children: label }),
    /* @__PURE__ */ jsx("select", { name, value, onChange: (e) => onHandleChange(e), className: `w-full rounded-lg h-12 mt-2 border border-gray-300 px-5 text-md` + className, children })
  ] });
}
function ShortText({ label, name, placeholder, value, className, onHandleChange }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("label", { className: " text-slate-700 text-base font-normal", children: label }),
    /* @__PURE__ */ jsx("textarea", { name, value, onChange: (e) => onHandleChange(e), cols: "30", rows: "2", placeholder, className: `w-full rounded-lg mt-1 border border-gray-300 py-3 px-4 text-black` + className })
  ] });
}
function Textarea({ label, name, placeholder, value, className, onHandleChange }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("label", { className: " text-slate-700 text-base font-normal", children: label }),
    /* @__PURE__ */ jsx("textarea", { name, value, onChange: (e) => onHandleChange(e), cols: "30", rows: "6", placeholder, className: `w-full rounded-lg mt-1 border border-gray-300 py-3 px-4 text-black` + className })
  ] });
}
function Sidebar(props) {
  const configuration = new Configuration({
    apiKey: props.apiKey
  });
  new OpenAIApi(configuration);
  const [useCase, setUseCase] = useState("blog_idea");
  const [variants, setVariants] = useState(1);
  const [level, setLevel] = useState(0.7);
  const [status, setStatus] = useState("normal");
  const [lang, setLang] = useState("English");
  const [error, setError] = useState({
    param: "",
    msg: ""
  });
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3e3,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
  });
  const [keyword, setKeyword] = useState();
  const [topic, setTopic] = useState();
  const [sectionKeyword, setSectionKeyword] = useState();
  const [interest, setInterest] = useState();
  const [skills, setSkills] = useState();
  const [role, setRole] = useState();
  const [jobSkills, setJobSkills] = useState();
  const [productName, setProductName] = useState();
  const [productDes, setProductDes] = useState();
  const [googleProductName, setGoogleProductName] = useState();
  const [googleProductDes, setGoogleProductDes] = useState();
  const [googleTargetKeyword, setGoogleTargetKeyword] = useState();
  const [postTopic, setPostTopic] = useState();
  const [desProductName, setDesProductName] = useState();
  const [desProductDes, setDesProductDes] = useState();
  const [seoTitle, setSeoTitle] = useState();
  const [seoTargetKeyword, setSeoTargetKeyword] = useState();
  const [videoTitle, setVideoTitle] = useState();
  const [videoKeyword, setVideoKeyword] = useState();
  const handleCase = (e) => {
    setUseCase(e.target.value);
    sessionStorage.setItem("topic", e.target.value);
  };
  useEffect(() => {
    if (sessionStorage.hasOwnProperty("topic")) {
      setUseCase(sessionStorage.getItem("topic"));
    }
    if (props.langs.length > 0) {
      setLang(props.langs[0].name);
    }
  }, [props.langs]);
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setStatus("progress");
    setError({ param: "", msg: "" });
    if (useCase === "blog_idea") {
      if (!keyword) {
        setStatus("normal");
        return setError({
          param: "keyword",
          msg: "The Primary Keyword Field Is Required"
        });
      }
      var prompt = `Write ${variants} Blog Idea & Outline About ` + keyword;
    } else if (useCase === "blog_writing") {
      if (!topic) {
        setStatus("normal");
        return setError({
          param: "topic",
          msg: "The Section Topic Field Is Required"
        });
      }
      var prompt = `Write ${variants} blog section about ${topic} With ${sectionKeyword} keywords`;
    } else if (useCase === "business_idea") {
      if (!interest) {
        setStatus("normal");
        return setError({
          param: "interest",
          msg: "The Interest Field Is Required"
        });
      }
      if (!skills) {
        setStatus("normal");
        return setError({
          param: "skills",
          msg: "The Skills Field Is Required"
        });
      }
      var prompt = `Give me ${variants} business Idea about ${interest} using ${skills} skills`;
    } else if (useCase === "cover_letter") {
      if (!role) {
        setStatus("normal");
        return setError({
          param: "role",
          msg: "The Job Role Field Is Required"
        });
      }
      if (!jobSkills) {
        setStatus("normal");
        return setError({
          param: "jobSkills",
          msg: "The Skills Field Is Required"
        });
      }
      var prompt = `Write me ${variants} cover letter for job. My Role is ${role} and my skills are ${jobSkills}`;
    } else if (useCase === "social_ads") {
      if (!productName) {
        setStatus("normal");
        return setError({
          param: "productName",
          msg: "The Product Name Field Is Required"
        });
      }
      if (!productDes) {
        setStatus("normal");
        return setError({
          param: "productDes",
          msg: "The Product Description Field Is Required"
        });
      }
      var prompt = `Write me ${variants} social media ads product description. The Product name is ${productName} and the product title is ${productDes}`;
    } else if (useCase === "google_ads") {
      if (!googleProductName) {
        setStatus("normal");
        return setError({
          param: "googleProductName",
          msg: "The Product Name Field Is Required"
        });
      }
      if (!googleProductDes) {
        setStatus("normal");
        return setError({
          param: "googleProductDes",
          msg: "The Product Description Field Is Required"
        });
      }
      if (!googleTargetKeyword) {
        setStatus("normal");
        return setError({
          param: "googleTargetKeyword",
          msg: "The Target Keyword Field Is Required"
        });
      }
      var prompt = `Write ${variants} google search ads. The Product Name is ${googleProductName}. The Product title is ${googleProductDes} and the product target keyword is ${googleTargetKeyword}.`;
    } else if (useCase === "post_idea") {
      if (!postTopic) {
        setStatus("normal");
        return setError({
          param: "postTopic",
          msg: "The Post Topic Field Is Required"
        });
      }
      var prompt = `Write me ${variants} post & Caption Idea about ${postTopic}`;
    } else if (useCase === "product_des") {
      if (!desProductName) {
        setStatus("normal");
        return setError({
          param: "desProductName",
          msg: "The Product Name Field Is Required"
        });
      }
      if (!desProductDes) {
        setStatus("normal");
        return setError({
          param: "desProductDes",
          msg: "The Product Description Field Is Required"
        });
      }
      var prompt = `Write me ${variants} Product Description. My Product Name is ${desProductName}. And My Product is ${desProductDes}`;
    } else if (useCase === "seo_meta") {
      if (!seoTitle) {
        setStatus("normal");
        return setError({
          param: "seoTitle",
          msg: "The Seo Title Field Is Required"
        });
      }
      var prompt = `Write me ${variants} SEO Meta Description. The SEO Meta Title is ${seoTitle}`;
    } else if (useCase === "seo_title") {
      if (!seoTargetKeyword) {
        setStatus("normal");
        return setError({
          param: "seoTargetKeyword",
          msg: "The Target Keyword Field Is Required"
        });
      }
      var prompt = `Write me ${variants} SEO Meta Title. The target Keyword is ${seoTargetKeyword}`;
    } else if (useCase === "video_des") {
      if (!videoTitle) {
        setStatus("normal");
        return setError({
          param: "videoTitle",
          msg: "The Video Title Field Is Required"
        });
      }
      var prompt = `Write me ${variants} video description. My video title is ${videoTitle}`;
    } else if (useCase === "video_idea") {
      if (!videoKeyword) {
        setStatus("normal");
        return setError({
          param: "videoKeyword",
          msg: "The Keyword Field Is Required"
        });
      }
      var prompt = `Write me ${variants} video idea with target keyword ${videoKeyword}`;
    }
    await axios.get("/user/plan/check").then(async (response) => {
      if (lang == "English") {
        var our_prompt = prompt;
      } else {
        var our_prompt = `Translate this into ${lang}: ` + prompt;
      }
      const completion = await axios.post("/user/ai/generate", {
        prompt: our_prompt,
        temperature: Math.floor(parseFloat(level)),
        max_tokens: 2566
      });
      setStatus("normal");
      await props.content({
        get_content: completion.data.choices[0].text,
        fileId: props.fileId ? props.fileId : ""
      });
      if (!props.fileId) {
        var wordCount = completion.data.choices[0].text.split(" ").length;
        Inertia.post("file/create", {
          data: JSON.stringify(completion.data.choices[0].text),
          wordCount
        });
      }
    }).catch(function(error2) {
      if (error2.response.data.errors) {
        Inertia.replace("/user/plan");
        Toast.fire({
          icon: "error",
          title: "Please upgrade your plan!"
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Something Went Wrong! Please Contact with support."
        });
      }
      setStatus("normal");
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "2xl:w-1/3 xl:w-1/3 bg-user px-5 py-6 border-r border-slate-200 2xl:min-sidebar-custom-height xl:min-sidebar-custom-height lg:min-sidebar-custom-height overflow-x-scroll", children: /* @__PURE__ */ jsxs("form", { onSubmit: onHandleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx("label", { className: " text-slate-700 text-base font-normal", children: "Choose Use Case" }),
      /* @__PURE__ */ jsxs("select", { onChange: (e) => handleCase(e), className: "w-full rounded-lg h-12 mt-2 border border-gray-300 px-5 text-md", value: useCase, children: [
        /* @__PURE__ */ jsx("option", { value: "blog_idea", children: "Blog Idea & Outline" }),
        /* @__PURE__ */ jsx("option", { value: "blog_writing", children: "Blog Section Writing" }),
        /* @__PURE__ */ jsx("option", { value: "business_idea", children: "Business Ideas" }),
        /* @__PURE__ */ jsx("option", { value: "cover_letter", children: "Cover Letter" }),
        /* @__PURE__ */ jsx("option", { value: "social_ads", children: "Facebook, Twitter, Linkedin Ads" }),
        /* @__PURE__ */ jsx("option", { value: "google_ads", children: "Google Search Ads" }),
        /* @__PURE__ */ jsx("option", { value: "post_idea", children: "Post & Caption Ideas" }),
        /* @__PURE__ */ jsx("option", { value: "product_des", children: "Product Description" }),
        /* @__PURE__ */ jsx("option", { value: "seo_meta", children: "SEO Meta Description" }),
        /* @__PURE__ */ jsx("option", { value: "seo_title", children: "SEO Meta Title" }),
        /* @__PURE__ */ jsx("option", { value: "video_des", children: "Video Description" }),
        /* @__PURE__ */ jsx("option", { value: "video_idea", children: "Video Idea" })
      ] })
    ] }),
    useCase === "blog_idea" && /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx(InputArea, { name: "keyword", onHandleChange: (e) => setKeyword(e.target.value), value: keyword, label: "Primary Keyword", placeholder: "AI Writing Assistant" }),
      error && error.param === "keyword" && /* @__PURE__ */ jsx("span", { className: " text-red-500 text-sm", children: error.msg })
    ] }),
    useCase === "blog_writing" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(ShortText, { onHandleChange: (e) => setTopic(e.target.value), label: "Section Topic", placeholder: "Role of AI Writers in the Future of Copywriting" }),
        error && error.param === "topic" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(ShortText, { onHandleChange: (e) => setSectionKeyword(e.target.value), label: "Section Keywords (Optional)", placeholder: "ai writer, blog generator, best writing software" }),
        error && error.param === "sectionKeyword" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] })
    ] }),
    useCase === "business_idea" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(InputArea, { onHandleChange: (e) => setInterest(e.target.value), label: "Interest", placeholder: "Marketing Saas" }),
        error && error.param === "interest" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(ShortText, { onHandleChange: (e) => setSkills(e.target.value), label: "Skills", placeholder: "copywriting, marketing, product development, AI" }),
        error && error.param === "skills" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] })
    ] }),
    useCase === "cover_letter" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(InputArea, { onHandleChange: (e) => setRole(e.target.value), label: "Job Role", placeholder: "Digital Marketer" }),
        error && error.param === "role" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(InputArea, { onHandleChange: (e) => setJobSkills(e.target.value), label: "Job Skills", placeholder: "bog writing, SEO, social media, email" }),
        error && error.param === "jobSkills" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] })
    ] }),
    useCase === "social_ads" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(InputArea, { onHandleChange: (e) => setProductName(e.target.value), label: "Product Name", placeholder: "AIWrite" }),
        error && error.param === "productName" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(Textarea, { onHandleChange: (e) => setProductDes(e.target.value), label: "Product Description", placeholder: "AiWrite is an AI-powered writing tool that helps you create high-quality content, in just a few seconds, at a fraction of the cost!" }),
        error && error.param === "productDes" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] })
    ] }),
    useCase === "google_ads" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(InputArea, { onHandleChange: (e) => setGoogleProductName(e.target.value), label: "Product Name", placeholder: "AIWrite" }),
        error && error.param === "googleProductName" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(Textarea, { onHandleChange: (e) => setGoogleProductDes(e.target.value), label: "Product Description", placeholder: "AiWrite is an AI-powered writing tool that helps you create high-quality content, in just a few seconds, at a fraction of the cost!" }),
        error && error.param === "googleProductDes" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(InputArea, { onHandleChange: (e) => setGoogleTargetKeyword(e.target.value), label: "Target Keyword", placeholder: "Content Writing" }),
        error && error.param === "googleTargetKeyword" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] })
    ] }),
    useCase === "post_idea" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx(ShortText, { onHandleChange: (e) => setPostTopic(e.target.value), label: "Post Topic", placeholder: "Inspiring community members to share their voices and ideas openly" }),
      error && error.param === "postTopic" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
    ] }) }),
    useCase === "product_des" && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(InputArea, { onHandleChange: (e) => setDesProductName(e.target.value), label: "Product Name", placeholder: "AIWrite" }),
        error && error.param === "desProductName" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
        /* @__PURE__ */ jsx(Textarea, { onHandleChange: (e) => setDesProductDes(e.target.value), label: "About Product", placeholder: "AiWrite is an AI-powered writing tool that helps you create high-quality content, in just a few seconds, at a fraction of the cost!" }),
        error && error.param === "desProductDes" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
      ] })
    ] }),
    useCase === "seo_meta" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx(ShortText, { onHandleChange: (e) => setSeoTitle(e.target.value), label: "Page Meta Title", placeholder: "AiWrite - Best AI Writer, Content Generator & Writing Assistant" }),
      error && error.param === "seoTitle" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
    ] }) }),
    useCase === "seo_title" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx(InputArea, { onHandleChange: (e) => setSeoTargetKeyword(e.target.value), label: "Target Keywords", placeholder: "AI writing assistant, content generator" }),
      error && error.param === "seoTargetKeyword" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
    ] }) }),
    useCase === "video_des" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx(ShortText, { onHandleChange: (e) => setVideoTitle(e.target.value), label: "Video Title", placeholder: "How to Use AI Writers to Create High-Quality Blogs in Minutes" }),
      error && error.param === "videoTitle" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
    ] }) }),
    useCase === "video_idea" && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
      /* @__PURE__ */ jsx(InputArea, { onHandleChange: (e) => setVideoKeyword(e.target.value), label: "Keywords", placeholder: "AI Writing Assistants" }),
      error && error.param === "videoKeyword" && /* @__PURE__ */ jsx("div", { className: " text-red-500 text-sm", children: error.msg })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between space-x-4", children: [
      /* @__PURE__ */ jsx("div", { className: " w-1/2", children: /* @__PURE__ */ jsxs(Select, { label: "Number Of Variants", onHandleChange: (e) => setVariants(e.target.value), value: variants, children: [
        /* @__PURE__ */ jsx("option", { value: "3", children: "3 Variants" }),
        /* @__PURE__ */ jsx("option", { value: "2", children: "2 Variants" }),
        /* @__PURE__ */ jsx("option", { value: "1", children: "1 Variants" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: " w-1/2", children: /* @__PURE__ */ jsxs(Select, { label: "Creativity Level", value: level, onHandleChange: (e) => setLevel(e.target.value), children: [
        /* @__PURE__ */ jsx("option", { value: 0.7, children: "Optimal" }),
        /* @__PURE__ */ jsx("option", { value: 0, children: "None (more factual)" }),
        /* @__PURE__ */ jsx("option", { value: 0.1, children: "Low" }),
        /* @__PURE__ */ jsx("option", { value: 0.6, children: "Medium" }),
        /* @__PURE__ */ jsx("option", { value: 0.9, children: "High" }),
        /* @__PURE__ */ jsx("option", { value: 1, children: "Max (less factual)" })
      ] }) })
    ] }) }),
    props.langs.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(Select, { label: "Select Language", value: lang, onHandleChange: (e) => setLang(e.target.value), children: props.langs.map((value, index) => /* @__PURE__ */ jsx("option", { value: value.name, children: value.name }, index)) }) }),
    status === "progress" && /* @__PURE__ */ jsxs("button", { type: "button", disabled: true, className: " bg-indigo-500 text-white text-center w-full rounded-lg py-3 text-lg", children: [
      /* @__PURE__ */ jsxs("svg", { role: "status", className: "inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }),
        /* @__PURE__ */ jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "#1C64F2" })
      ] }),
      "Writing..."
    ] }),
    status === "normal" && /* @__PURE__ */ jsx("button", { type: "submit", className: " bg-indigo-500 text-white text-center w-full rounded-lg py-3 text-lg", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center", children: [
      /* @__PURE__ */ jsx("i", { className: "ri-pen-nib-line text-xl mr-2" }),
      " ",
      /* @__PURE__ */ jsx("span", { children: "Write For Me" })
    ] }) })
  ] }) }) });
}
export {
  Sidebar as S
};
