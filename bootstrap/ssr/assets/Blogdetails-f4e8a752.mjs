import { j as jsxs, a as jsx } from "../ssr.mjs";
import { F as FrontendApp } from "./Frontentapp-e05c4fbb.mjs";
import moment from "moment";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, PinterestShareButton } from "react-share";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
import "./Header-a48e5a63.mjs";
import "react";
function BlogDetails({ blog, url, hero, settings, menuitems, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems }) {
  return /* @__PURE__ */ jsxs(FrontendApp, { settings, menuitems, hero, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems, children: [
    /* @__PURE__ */ jsx("div", { className: " py-40 mt-8 bg-indigo-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: " 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-bold text-slate-600", children: blog.name }),
      /* @__PURE__ */ jsx("nav", { className: "flex justify-center px-5 py-3 text-gray-700 rounded-lg", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs("ol", { className: "xs:hidden 2xl:inline-flex xl:inline-flex lg:inline-flex md:inline-flex sm:inline-flex items-center space-x-1 md:space-x-3", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "ml-1 text-lg font-light text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white", children: "Home" }) }) }),
        /* @__PURE__ */ jsx("li", { "aria-current": "page", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", className: "w-6 h-6 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clip-rule": "evenodd" }) }),
          /* @__PURE__ */ jsx("span", { className: "ml-1 text-lg font-light text-gray-400 md:ml-2 dark:text-gray-400", children: blog.name })
        ] }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto my-40", children: /* @__PURE__ */ jsxs("div", { className: " 2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-3/4 xs:w-full mx-auto 2xl:text-left xl:text-left md:text-left sm:text-left xs:text-center", children: [
      /* @__PURE__ */ jsx("img", { className: " w-full rounded-3xl", src: "/storage/blog/" + JSON.parse(blog.blogmeta.value).preview, alt: "" }),
      /* @__PURE__ */ jsxs("div", { className: " mt-8 flex items-center 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-start xs:justify-center mb-1 text-slate-500 text-lg", children: [
        /* @__PURE__ */ jsx("i", { className: "ri-calendar-line mr-1" }),
        " ",
        /* @__PURE__ */ jsxs("span", { children: [
          " ",
          moment(blog.created_at).format("LL")
        ] })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: " font-extrabold font-sans text-slate-600 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-4xl leading-tight", children: blog.name }),
      /* @__PURE__ */ jsxs("div", { className: " border-b mb-5 pb-8", children: [
        /* @__PURE__ */ jsx("p", { className: " mt-5 font-light text-slate-400 text-xl leading-normal py-2 mb-4", children: JSON.parse(blog.blogmeta.value).short_content }),
        /* @__PURE__ */ jsx("p", { className: " mt-5 font-light text-slate-400 text-xl leading-normal py-2 mb-4", children: JSON.parse(blog.blogmeta.value).description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " flex items-center justify-end", children: [
        /* @__PURE__ */ jsx(FacebookShareButton, { url: url + "blog/" + blog.slug, children: /* @__PURE__ */ jsx("a", { href: "#", className: " border border-indigo-500 rounded-full px-4 py-3 flex items-center ml-3 bg-gray-100", children: /* @__PURE__ */ jsx("i", { className: " text-base ri-facebook-fill text-indigo-500" }) }) }),
        /* @__PURE__ */ jsx(TwitterShareButton, { url: url + "blog/" + blog.slug, children: /* @__PURE__ */ jsx("a", { href: "#", className: " border border-indigo-500 rounded-full px-4 py-3 flex items-center ml-3 bg-gray-100", children: /* @__PURE__ */ jsx("i", { className: " text-base ri-twitter-fill text-indigo-500" }) }) }),
        /* @__PURE__ */ jsx(LinkedinShareButton, { url: url + "blog/" + blog.slug, title: blog.name, summary: JSON.parse(blog.blogmeta.value).short_content, source: url + "blog/" + blog.slug, children: /* @__PURE__ */ jsx("a", { href: "#", className: " border border-indigo-500 rounded-full px-4 py-3 flex items-center ml-3 bg-gray-100 text-indigo-500 text-base ", children: /* @__PURE__ */ jsx("i", { className: "ri-linkedin-box-fill" }) }) }),
        /* @__PURE__ */ jsx(PinterestShareButton, { url: url + "blog/" + blog.slug, media: url + "storage/blog/" + JSON.parse(blog.blogmeta.value).preview, description: JSON.parse(blog.blogmeta.value).short_content, children: /* @__PURE__ */ jsx("a", { href: "#", className: " border border-indigo-500 rounded-full px-4 py-3 flex items-center ml-3 bg-gray-100", children: /* @__PURE__ */ jsx("i", { className: " text-base ri-pinterest-fill text-indigo-500" }) }) })
      ] })
    ] }) })
  ] });
}
export {
  BlogDetails as default
};
