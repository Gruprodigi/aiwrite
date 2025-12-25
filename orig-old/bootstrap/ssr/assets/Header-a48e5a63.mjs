import { a as jsx, F as Fragment, j as jsxs } from "../ssr.mjs";
import { Head, Link } from "@inertiajs/inertia-react";
import { useState } from "react";
function Footer({ copyright, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { "data-aos": "fade-up", className: "bg-indigo-50 container mx-auto mb-12 rounded-3xl", children: [
    /* @__PURE__ */ jsxs("div", { className: " 2xl:flex xl:flex lg:flex md:flex sm:grid sm:grid-cols-2 xs:grid-cols-1 sm:gap-12 xs:gap-12 justify-between 2xl:mx-28 xl:mx-28 lg:mx-28 md:mx-10 sm:mx-16 xs:mx-10 2xl:pt-20 xl:pt-20 lg:pt-20 md:pt-20 sm:pt-20 xs:pt-10 pb-10 border-b border-indigo-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-12", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-slate-700 font-medium text-2xl mb-8", children: footer_first_menuitems.name }),
        /* @__PURE__ */ jsx("ul", { children: footer_first_menuitems.menuitems.map((value, index) => /* @__PURE__ */ jsx("li", { className: " mb-4 font-light text-lg ", children: /* @__PURE__ */ jsx("a", { href: JSON.parse(value.data).url, children: value.name }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-12", children: [
        /* @__PURE__ */ jsx("h5", { className: " text-slate-700 font-medium text-2xl mb-8", children: footer_second_menuitems.name }),
        /* @__PURE__ */ jsx("ul", { children: footer_second_menuitems.menuitems.map((value, index) => /* @__PURE__ */ jsx("li", { className: " mb-4 font-light text-lg ", children: /* @__PURE__ */ jsx("a", { href: JSON.parse(value.data).url, children: value.name }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-12", children: [
        /* @__PURE__ */ jsx("h5", { className: " text-slate-700 font-medium text-2xl mb-8", children: footer_third_menuitems.name }),
        /* @__PURE__ */ jsx("ul", { children: footer_third_menuitems.menuitems.map((value, index) => /* @__PURE__ */ jsx("li", { className: " mb-4 font-light text-lg ", children: /* @__PURE__ */ jsx("a", { href: JSON.parse(value.data).url, children: value.name }) }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsx("h5", { className: "text-slate-700 font-medium text-2xl mb-8", children: footer_four_menuitems.name }),
        /* @__PURE__ */ jsx("ul", { children: footer_four_menuitems.menuitems.map((value, index) => /* @__PURE__ */ jsx("li", { className: " mb-4 font-light text-lg ", children: /* @__PURE__ */ jsx("a", { href: JSON.parse(value.data).url, children: value.name }) }, index)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: " text-center py-8", children: /* @__PURE__ */ jsx("p", { className: " text-slate-600 text-lg font-normal", children: copyright }) })
  ] }) });
}
function Header({ favicon, logo, button_title, button_url, menuitems }) {
  const [toogleMenu, setToogleMenu] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("link", { rel: "icon", type: "image/png", href: favicon }) }),
    /* @__PURE__ */ jsx("div", { className: " container mx-auto pt-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx("img", { className: "2xl:h-9 xl:h-9 lg:h-9 md:h-9 sm:h-9 xs:h-7", src: "/storage/" + logo, alt: "logo" }) }),
        /* @__PURE__ */ jsx("ul", { className: "ml-12 2xl:block xl:block lg:block md:hidden sm:hidden xs:hidden", children: menuitems.menuitems.map((value, index) => /* @__PURE__ */ jsxs("li", { className: "relative group inline-block px-5 lg:px-3 hover:text-indigo-500 font-light text-slate-900 text-lg", children: [
          /* @__PURE__ */ jsxs(Link, { href: JSON.parse(value.data).url, className: "flex items-center", children: [
            /* @__PURE__ */ jsx("span", { children: value.name }),
            " ",
            value.childs != "" && /* @__PURE__ */ jsx("i", { className: "ri-arrow-down-s-line flex text-xl pl-2" })
          ] }),
          value.childs != "" && /* @__PURE__ */ jsx("ul", { className: "absolute group-hover:block hidden w-52 shadow-lg px-5 py-4 rounded-md group-hover:transition group-hover:duration-500 opacity-100 bg-white", children: value.childs.map((child, index2) => /* @__PURE__ */ jsx("li", { className: "relative group font-light text-slate-500 hover:text-indigo-500 text-base py-2", children: /* @__PURE__ */ jsx(Link, { href: JSON.parse(child.data).url, children: child.name }) }, index2)) })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: " flex items-center", children: [
        /* @__PURE__ */ jsx(Link, { href: "/login", className: " font-normal text-lg text-slate-600 mr-5 2xl:block xl:block lg:block md:block sm:block xs:hidden", children: "Login" }),
        /* @__PURE__ */ jsx(Link, { href: button_url, className: " bg-indigo-500 text-white rounded-full px-10 py-4 2xl:block xl:block lg:block md:block sm:block xs:hidden", children: button_title }),
        /* @__PURE__ */ jsx("a", { className: "2xl:hidden xl:hidden lg:hidden md:block sm:block border px-4 py-1 rounded-lg ml-5 text-3xl", onClick: () => setToogleMenu(!toogleMenu), children: /* @__PURE__ */ jsx("i", { className: "ri-align-justify" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: toogleMenu ? "block bg-white shadow-lg left-0 top-0 bottom-0 w-1/3 md:w-1/3 sm:w-1/2 xs:w-full overflow-scroll fixed z-10" : "hidden", children: [
      /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx("img", { className: "h-9 text-center mx-auto mt-12", src: "/storage/" + logo, alt: "" }) }),
      /* @__PURE__ */ jsx("ul", { className: " mt-8 mx-5", children: menuitems.menuitems.map((value, index) => /* @__PURE__ */ jsxs("li", { className: "relative group px-0 border-b border-slate-200 py-4 lg:px-3 hover:text-indigo-500 font-normal text-slate-900 text-lg", children: [
        value.childs != "" ? /* @__PURE__ */ jsxs("a", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: value.name }),
          " ",
          value.childs != "" && /* @__PURE__ */ jsx("i", { className: "ri-arrow-down-s-line flex justify-end text-xl pl-2" })
        ] }) : /* @__PURE__ */ jsx(Link, { href: JSON.parse(value.data).url, className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("span", { children: value.name }) }),
        value.childs != "" && /* @__PURE__ */ jsx("ul", { className: "group-hover:block hidden py-1 rounded-md group-hover:transition group-hover:duration-500 opacity-100 bg-white", children: value.childs.map((child, index2) => /* @__PURE__ */ jsx("li", { className: "relative group px-0 border-b px-5 last:border-none last:pb-0 border-slate-200 font-light text-slate-500 hover:text-indigo-500 text-base py-3", children: /* @__PURE__ */ jsx(Link, { href: JSON.parse(child.data).url, children: child.name }) }, index2)) })
      ] }, index)) })
    ] })
  ] });
}
export {
  Footer as F,
  Header as H
};
