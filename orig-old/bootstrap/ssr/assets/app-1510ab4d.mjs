import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
function Navbar({ logo }) {
  return /* @__PURE__ */ jsx("div", { className: " w-full bg-indigo-500 sticky top-0 z-50", children: /* @__PURE__ */ jsx("div", { className: "mx-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center py-4 justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("div", { className: " mr-8", children: /* @__PURE__ */ jsx(Link, { href: "/user/dashboard", children: /* @__PURE__ */ jsx("img", { className: "filter-invert h-7", src: "/storage/" + logo, alt: "" }) }) }),
      /* @__PURE__ */ jsx(Link, { href: "/user/dashboard", className: "flex items-center text-slate-200 text-lg font-medium border-r border-slate-400 pr-6 mr-6", children: /* @__PURE__ */ jsxs("span", { className: " flex items-center", children: [
        /* @__PURE__ */ jsx("i", { className: "ri-home-3-line mr-1 text-lg" }),
        /* @__PURE__ */ jsx("span", { children: "Dashboard" })
      ] }) }),
      /* @__PURE__ */ jsxs(Link, { className: "flex items-center text-slate-200 text-lg font-medium", href: "/user/account", children: [
        /* @__PURE__ */ jsx("i", { className: "ri-user-line mr-1 text-base" }),
        "Account"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex item-center", children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: /* @__PURE__ */ jsx("i", { className: "ri-question-line text-white text-xl" }) }) }) })
  ] }) }) });
}
function App({ children, logo }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Navbar, { logo }),
    children
  ] }) });
}
export {
  App as A
};
