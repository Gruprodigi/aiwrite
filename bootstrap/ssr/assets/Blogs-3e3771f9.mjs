import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { F as FrontendApp } from "./Frontentapp-e05c4fbb.mjs";
import { Head, Link } from "@inertiajs/inertia-react";
import moment from "moment";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "./Header-a48e5a63.mjs";
import "react";
function Blogs({ blogs, hero, settings, menuitems, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems, seo_blog }) {
  const wordLimit = (str, limit) => {
    var words = str.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return str;
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: seo_blog.name }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: JSON.parse(seo_blog.seometa.value).meta_description }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: JSON.parse(seo_blog.seometa.value).meta_tag }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: JSON.parse(seo_blog.seometa.value).twitter_title })
    ] }),
    /* @__PURE__ */ jsxs(FrontendApp, { settings, menuitems, hero, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems, children: [
      /* @__PURE__ */ jsx("div", { className: " py-40 mt-8 bg-indigo-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-bold text-slate-600", children: "Blog Lists" }),
        /* @__PURE__ */ jsx("nav", { className: "flex justify-center px-5 py-3 text-gray-700 rounded-lg", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs("ol", { className: "inline-flex items-center space-x-1 md:space-x-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "ml-1 text-lg font-light text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white", children: "Home" }) }) }),
          /* @__PURE__ */ jsx("li", { "aria-current": "page", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", className: "w-6 h-6 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { "fill-rule": "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", "clip-rule": "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { className: "ml-1 text-lg font-light text-gray-400 md:ml-2 dark:text-gray-400", children: "Blog Lists" })
          ] }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto my-40", children: /* @__PURE__ */ jsx("div", { className: " grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-5", children: blogs.data.map((value, index) => /* @__PURE__ */ jsxs("div", { className: " shadow rounded-lg p-3", children: [
        /* @__PURE__ */ jsx(Link, { href: "/blog/" + value.slug, children: /* @__PURE__ */ jsx("img", { className: " rounded-lg h-80 object-cover w-full", src: "/storage/blog/" + JSON.parse(value.blogmeta.value).preview, alt: "" }) }),
        /* @__PURE__ */ jsxs("div", { className: " px-5 py-8 pt-5", children: [
          /* @__PURE__ */ jsxs("div", { className: " flex items-center mb-1 text-slate-500", children: [
            /* @__PURE__ */ jsx("i", { className: "ri-calendar-line mr-1" }),
            " ",
            /* @__PURE__ */ jsxs("span", { children: [
              " ",
              moment(value.created_at).format("LL")
            ] })
          ] }),
          /* @__PURE__ */ jsx(Link, { href: "/blog/" + value.slug, children: /* @__PURE__ */ jsx("h2", { className: " font-bold font-sans text-slate-600 text-2xl", children: value.name }) }),
          /* @__PURE__ */ jsx("p", { className: " font-light text-slate-400 text-base leading-normal py-2 mb-4", children: wordLimit(JSON.parse(value.blogmeta.value).short_content, 18) }),
          /* @__PURE__ */ jsx(Link, { href: "/blog/" + value.slug, className: " bg-indigo-500 text-white px-8 rounded-lg py-3 font-light text-base", children: "Read More" })
        ] })
      ] }, index)) }) })
    ] })
  ] });
}
export {
  Blogs as default
};
