import { a as jsx, F as Fragment, j as jsxs } from "../ssr.mjs";
import AOS from "aos";
import { H as Header, F as Footer } from "./Header-a48e5a63.mjs";
import { TypeAnimation } from "react-type-animation";
import { Link, Head } from "@inertiajs/inertia-react";
import { P as Pricing } from "./Pricing-699c7f30.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "react";
const aos = "";
function Hero({ hero, usecases }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mt-32 2xl:pb-32 xl:pb-32 lg:pb-32 md:pb-32 sm:pb-32 xs:pb-0 text-center 2xl:px-32 xl:px-32 lg:px-0 md:px-0", children: [
    /* @__PURE__ */ jsxs("h2", { className: " text-slate-700 font-extrabold 2xl:text-7xl xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl xs:text-3xl font-sans leading-tight", children: [
      hero.hero_title,
      " ",
      /* @__PURE__ */ jsx(
        TypeAnimation,
        {
          sequence: [
            "Blog Idea & Outline.",
            1e3,
            "Blog Section Writing.",
            1e3,
            "Business Ideas.",
            1e3,
            "Cover Letter.",
            1e3,
            "Facebook, Twitter Ads.",
            1e3,
            "Google Search Ads.",
            1e3,
            "Post & Caption Ideas.",
            1e3,
            "Product Description.",
            1e3,
            "SEO Meta Description.",
            1e3,
            "SEO Meta Title.",
            1e3,
            "Video Description.",
            1e3,
            "Video Idea.",
            1e3,
            () => {
            }
          ],
          wrapper: "div",
          cursor: true,
          repeat: Infinity
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: " font-sans 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-base xs:text-xs pt-5 2xl:px-32 xl:px-32 lg:px-32 md:px-32 sm:px-20 text-slate-500 2xl:mb-10 xl:mb-10 lg:mb-10 md:mb-10 sm:mb-10 xs:mb-5", children: hero.description }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Link, { href: hero.button_url, className: " bg-indigo-500 text-white 2xl:px-16 xl:px-16 lg:px-16 md:px-16 sm:px-16 xs:px-8 2xl:py-5 xl:py-5 lg:py-5 md:py-5 sm:py-5 xs:py-3 leading-normal rounded-full 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-sm", children: hero.button_title }),
      /* @__PURE__ */ jsx("div", { className: "2xl:mt-6 xl:mt-6 lg:mt-6 md:mt-6 sm:mt-6 xs:mt-3 font-light text-sm text-slate-500", children: "No Credit Card Required." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: " mt-5", children: /* @__PURE__ */ jsx("img", { "data-aos": "zoom-in-up", className: " border-12 border-white rounded-3xl shadow-lg", src: "/storage/hero_img/" + hero.hero_img, alt: "" }) })
  ] }) });
}
function Brand({ brands, title }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: " container mx-auto text-center mt-20 mb-32", children: [
    /* @__PURE__ */ jsx("h5", { className: " text-slate-500 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-lg xs:text-sm font-light", children: title }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center w-full md:overflow-x-scroll sm:overflow-x-scroll xs:overflow-x-scroll items-center mt-3", children: brands.map((value, index) => /* @__PURE__ */ jsx("img", { className: "px-8 h-12 opacity-30", src: "/storage/brand/" + value.name, alt: "" }, index)) })
  ] }) });
}
function UseCase({ usecases, title, description }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto mb-40", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: " 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-2xl font-sans font-bold text-slate-600", children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-500 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-base font-light", children: description })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5", children: usecases.map((value, index) => /* @__PURE__ */ jsxs("div", { "data-aos": "zoom-in", className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center shadow rounded-3xl 2xl:px-10 xl:px-10 lg:px-3 md:px-5 sm:px-10 xs:px-5 2xl:py-10 xl:py-10 lg:py-5 md:py-10 sm:py-10 xs:py-5", children: [
      /* @__PURE__ */ jsx("div", { className: "mr-5", children: /* @__PURE__ */ jsx("i", { className: JSON.parse(value.use_case_meta.value).icon + " px-6 py-5 text-2xl text-indigo-500 h-auto rounded-full flex items-center shadow-sm xs:inline-block" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: " text-xl text-slate-700 font-bold mb-2", children: value.name }),
        /* @__PURE__ */ jsx("p", { className: " font-light text-gray-500 mb-2", children: JSON.parse(value.use_case_meta.value).description }),
        /* @__PURE__ */ jsxs(Link, { href: "/login", className: " text-indigo-500 flex items-center xs:inline-block", children: [
          /* @__PURE__ */ jsx("span", { className: " mr-1", children: "Try It Free" }),
          " ",
          /* @__PURE__ */ jsx("i", { className: "ri-arrow-right-line" })
        ] })
      ] })
    ] }, index)) })
  ] }) });
}
function Howitworks({ data, title }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: " container mx-auto mb-40", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-2xl font-sans font-bold text-slate-600 mb-12", children: title }),
    /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center justify-center 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12 sm:space-x-5", children: [
      /* @__PURE__ */ jsx("div", { "data-aos": "fade-right", className: "2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-2/5 xs:w-full bg-indigo-100  rounded-2xl p-6", children: /* @__PURE__ */ jsx("img", { className: " ring ring-indigo-500 rounded-2xl", src: "/storage/howitworks/" + data.step1_image, alt: "" }) }),
      /* @__PURE__ */ jsxs("div", { "data-aos": "fade-left", className: "2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/2 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-10 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block 2xl:items-center xl:items-center lg:items-center md:items-start sm:items-center ", children: [
          /* @__PURE__ */ jsx("span", { className: " ring-1 rounded-full px-4 py-2 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-4", children: "1" }),
          /* @__PURE__ */ jsx("span", { className: " 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl font-sans font-bold text-slate-600 xs:block", children: data.step1_title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: " mt-4 text-gray-500 font-light text-base", children: data.step1_des })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { "data-aos": "fade-up", className: " w-2/5 mx-auto my-5", children: /* @__PURE__ */ jsx("img", { src: "https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/628288c5cd3e84f1470a378c_line_right.svg", alt: "" }) }),
    /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center justify-center 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12 sm:space-x-12 xs:space-x-0", children: [
      /* @__PURE__ */ jsxs("div", { "data-aos": "fade-right", className: "2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-1/2 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block  2xl:items-center xl:items-center lg:items-center md:items-start sm:items-center ", children: [
          /* @__PURE__ */ jsx("span", { className: " ring-1 rounded-full px-4 py-2 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4", children: "2" }),
          /* @__PURE__ */ jsx("span", { className: " 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl font-sans font-bold text-slate-600 xs:block", children: data.step2_title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: " mt-4 text-gray-500 font-light text-base 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4", children: data.step2_des })
      ] }),
      /* @__PURE__ */ jsx("div", { "data-aos": "fade-left", className: "2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/5 sm:w-2/5 xs:w-full bg-indigo-100  rounded-2xl p-6", children: /* @__PURE__ */ jsx("img", { className: " ring ring-indigo-500 rounded-2xl", src: "/storage/howitworks/" + data.step2_image, alt: "" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { "data-aos": "fade-up", className: " w-2/5 mx-auto my-5", children: /* @__PURE__ */ jsx("img", { src: "https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/628288c5cd3e84727f0a378f_line_left.svg", alt: "" }) }),
    /* @__PURE__ */ jsxs("div", { "data-aos": "fade-right", className: "2xl:ml-40 xl:ml-40 lg:ml-40 md:ml-40 sm:ml-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center", children: [
        /* @__PURE__ */ jsx("span", { className: " ring-1 rounded-full px-4 py-2 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4", children: "3" }),
        /* @__PURE__ */ jsx("span", { className: " 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl xs:text-md font-sans font-bold text-slate-600 xs:block", children: data.step3_title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left xs:text-center mt-4 text-gray-500 font-light text-base", children: data.step3_des })
    ] })
  ] }) });
}
function Level({ level }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { "data-aos": "fade-up", className: " container mx-auto 2xl:mb-40 xl:mb-40 lg:mb-40 md:mb-40 sm:mb-40 xs:mb-20", children: /* @__PURE__ */ jsxs("div", { className: " 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-full mx-auto text-center", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-slate-700 font-extrabold 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl xs:text-3xl font-sans", children: level.title }),
    /* @__PURE__ */ jsx("p", { className: "font-sans 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-sm pt-5 text-slate-500 mb-8 2xl:px-56 xl:px-56 lg:px-56 md:px-32 xs:px-0", children: level.description }),
    /* @__PURE__ */ jsx(Link, { href: level.button_url, className: " bg-indigo-500 text-white rounded-full px-10 py-4", children: level.button_title }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 2xl:flex xl:flex lg:flex md:flex xs:hidden sm:grid sm:grid-cols-2 sm:gap-5 justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center sm:justify-center 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: " ring-1 rounded-full px-4 py-3 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500", children: /* @__PURE__ */ jsx("i", { className: "ri-check-line text-indigo-500" }) }),
        /* @__PURE__ */ jsx("span", { className: " 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-base font-sans font-light text-slate-600 whitespace-nowrap", children: level.level_list1 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center sm:justify-center 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: " ring-1 rounded-full px-4 py-3 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block", children: /* @__PURE__ */ jsx("i", { className: "ri-check-line text-indigo-500" }) }),
        /* @__PURE__ */ jsx("span", { className: " 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-base font-sans font-light text-slate-600 whitespace-nowrap", children: level.level_list2 })
      ] }),
      /* @__PURE__ */ jsx("div", { className: " sm:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block items-center sm:justify-center 2xl:mb-0 xl:2xl:mb-0 lg:2xl:mb-0 md:2xl:mb-0 sm:2xl:mb-0 xs:mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: " ring-1 rounded-full px-4 py-3 flex items-center mr-3 bg-slate-50 ring-indigo-200 text-md text-gray-500 xs:inline-block", children: /* @__PURE__ */ jsx("i", { className: "ri-check-line text-indigo-500" }) }),
        /* @__PURE__ */ jsx("span", { className: " 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg xs:text-base font-sans font-light text-slate-600 whitespace-nowrap", children: level.level_list3 })
      ] }) })
    ] })
  ] }) }) });
}
function Welcome(props) {
  AOS.init();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: props.seo_home.name }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: JSON.parse(props.seo_home.seometa.value).meta_description }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: JSON.parse(props.seo_home.seometa.value).meta_tag }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: JSON.parse(props.seo_home.seometa.value).twitter_title })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-center bg-cover bg-no-repeat", style: { backgroundImage: `url('/assets/img/hero.jpg')` }, children: /* @__PURE__ */ jsxs("div", { className: " container mx-auto", children: [
      /* @__PURE__ */ jsx(Header, { favicon: props.settings.site_favicon, logo: props.settings.site_logo, button_title: props.hero.button_title, button_url: props.hero.button_url, menuitems: props.menuitems }),
      /* @__PURE__ */ jsx(Hero, { hero: props.hero, usecases: props.usecases })
    ] }) }),
    /* @__PURE__ */ jsx(Brand, { brands: props.brands, title: props.settings.brand_title }),
    /* @__PURE__ */ jsx(UseCase, { usecases: props.usecases, title: props.settings.case_title, description: props.settings.case_description }),
    /* @__PURE__ */ jsx(Howitworks, { data: props.howitworks, title: props.settings.how_it_works_title }),
    /* @__PURE__ */ jsx(Pricing, { plans: props.plans, title: props.settings.plan_title, currency: props.currency }),
    /* @__PURE__ */ jsx(Level, { level: props.level }),
    /* @__PURE__ */ jsx(Footer, { copyright: props.settings.copyright, footer_first_menuitems: props.footer_first_menuitems, footer_second_menuitems: props.footer_second_menuitems, footer_third_menuitems: props.footer_third_menuitems, footer_four_menuitems: props.footer_four_menuitems })
  ] });
}
export {
  Welcome as default
};
