import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { S as Sidebar } from "./Sidebar-b5cabf7d.mjs";
import { A as App } from "./app-1510ab4d.mjs";
import { Head, Link } from "@inertiajs/inertia-react";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "@inertiajs/inertia";
function Plan(props) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Manage Plan" }) }),
    /* @__PURE__ */ jsx(App, { logo: props.logo, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto my-20", children: /* @__PURE__ */ jsxs("div", { className: "2xl:flex lg:flex md:flex sm:block 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12", children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
        props.errors[0] && /* @__PURE__ */ jsx("div", { className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5", role: "alert", children: /* @__PURE__ */ jsx("span", { className: "block sm:inline", children: props.errors[0] }) }),
        /* @__PURE__ */ jsx("div", { className: "grid 2x:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-6", children: props.plans.map((plan, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white border rounded-lg px-8 py-14", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-500 text-xl", children: plan.name }) }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "py-3 text-slate-400 text-base font-normal", children: JSON.parse(plan.data).short_content }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center pb-3", children: [
            /* @__PURE__ */ jsxs("h2", { className: " text-gray-600 font-bold text-4xl", children: [
              props.currency,
              plan.price,
              " "
            ] }),
            /* @__PURE__ */ jsxs("sub", { className: " text-gray-400 text-base font-light text-uppercase", children: [
              " / ",
              plan.duration_type
            ] })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-gray-600", children: "What’s included" }),
          /* @__PURE__ */ jsxs("ul", { className: "py-2", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-600 font-medium text-base py-2", children: [
              /* @__PURE__ */ jsx("i", { className: "ri-checkbox-circle-fill text-blue-600 text-xl mr-2" }),
              " Generate ",
              plan.word_limit.toLocaleString("en-US"),
              " AI Words / month"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-600 font-medium text-base py-2", children: [
              /* @__PURE__ */ jsx("i", { className: "ri-checkbox-circle-fill text-blue-600 text-xl mr-2" }),
              " Access 12+ use-cases"
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-600 font-medium text-base py-2", children: [
              /* @__PURE__ */ jsx("i", { className: JSON.parse(plan.data).customerSupport == 1 ? "ri-checkbox-circle-fill text-blue-600 text-xl mr-2" : "ri-close-circle-fill text-red-600 text-xl mr-2" }),
              " Priority email & chat support ",
              JSON.parse(plan.data).customerSupport
            ] })
          ] }),
          props.user.plan_id === plan.id ? /* @__PURE__ */ jsx("a", { className: " bg-indigo-200 text-indigo-500 font-normal text-base w-full block text-center py-3 rounded-md leading-normal mt-3 cursor-not-allowed", children: "Already Subscribed" }) : /* @__PURE__ */ jsx(Link, { href: `/user/select/payment/${plan.id}`, className: " bg-indigo-500 text-white font-normal text-base w-full block text-center py-3 rounded-md leading-normal mt-3 cursor-pointer", children: "Subscribe Now" })
        ] }, index)) })
      ] })
    ] }) }) })
  ] });
}
export {
  Plan as default
};
