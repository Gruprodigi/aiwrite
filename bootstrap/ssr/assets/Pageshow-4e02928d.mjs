import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { F as FrontendApp } from "./Frontentapp-e05c4fbb.mjs";
import { Head } from "@inertiajs/inertia-react";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "./Header-a48e5a63.mjs";
import "react";
function Pageshow(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: props.page.name }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: JSON.parse(props.page.pagemeta.value).short_content }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: props.page.name })
    ] }),
    /* @__PURE__ */ jsxs(FrontendApp, { settings: props.settings, menuitems: props.menuitems, hero: props.hero, footer_first_menuitems: props.footer_first_menuitems, footer_second_menuitems: props.footer_second_menuitems, footer_third_menuitems: props.footer_third_menuitems, footer_four_menuitems: props.footer_four_menuitems, children: [
      /* @__PURE__ */ jsx("div", { className: " py-40 mt-8 mb-24 bg-indigo-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: " 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-bold text-slate-600", children: props.page.name }),
        /* @__PURE__ */ jsx("nav", { className: "flex justify-center px-5 py-3 text-gray-700 rounded-lg", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs("ol", { className: "inline-flex items-center space-x-1 md:space-x-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "ml-1 text-lg font-light text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white", children: "Home" }) }) }),
          /* @__PURE__ */ jsx("li", { "aria-current": "page", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", className: "w-6 h-6 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { className: "ml-1 text-lg font-light text-gray-400 md:ml-2 dark:text-gray-400", children: props.page.name })
          ] }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto mb-24", children: [
        /* @__PURE__ */ jsx("p", { className: "mt-5 font-light text-slate-400 text-xl leading-normal py-2 mb-4", children: JSON.parse(props.page.pagemeta.value).short_content }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 font-light text-slate-400 text-xl leading-normal py-2 mb-4", children: JSON.parse(props.page.pagemeta.value).description })
      ] })
    ] })
  ] });
}
export {
  Pageshow as default
};
