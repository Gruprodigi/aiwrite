import { a as jsx, F as Fragment, j as jsxs } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
function Pricing({ plans, title, currency }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: " container mx-auto 2xl:mb-40 xl:mb-40 lg:mb-40 md:mb-40 sm:mb-40 xs:mb-20", children: [
    title && /* @__PURE__ */ jsx("div", { className: "text-center 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-sans font-bold text-slate-600 mb-12", children: title }),
    /* @__PURE__ */ jsx("div", { className: "grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-6", children: plans.map((plan, index) => /* @__PURE__ */ jsxs("div", { "data-aos": "zoom-in-up", className: "bg-white shadow rounded-lg 2xl:px-12 lg:px-12 xl:px-12 md:px-12 sm:px-12 xs:px-5 2xl:py-14 xl:py-14 lg:py-14 md:py-14 sm:py-14 xs:py-5", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-3", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-500 text-xl", children: plan.name }) }) }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "py-3 text-slate-400 text-base font-normal", children: JSON.parse(plan.data).short_content }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center pb-3", children: [
        /* @__PURE__ */ jsxs("h2", { className: " text-gray-600 font-bold text-4xl", children: [
          currency,
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
        /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-600 font-medium 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base xs:text-sm py-2", children: [
          /* @__PURE__ */ jsx("i", { className: "ri-checkbox-circle-fill text-blue-600 text-xl mr-2" }),
          " Generate ",
          plan.word_limit.toLocaleString("en-US"),
          " AI Words / month"
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-600 font-medium 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base xs:text-sm py-2", children: [
          /* @__PURE__ */ jsx("i", { className: "ri-checkbox-circle-fill text-blue-600 text-xl mr-2" }),
          " Access 12+ use-cases"
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-center text-gray-600 font-medium 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-base xs:text-sm py-2", children: [
          /* @__PURE__ */ jsx("i", { className: JSON.parse(plan.data).customerSupport == 1 ? "ri-checkbox-circle-fill text-blue-600 text-xl mr-2" : "ri-close-circle-fill text-red-600 text-xl mr-2" }),
          " Priority email & chat support ",
          JSON.parse(plan.data).customerSupport
        ] })
      ] }),
      /* @__PURE__ */ jsx(Link, { href: `/user/select/payment/${plan.id}`, className: " bg-indigo-500 text-white font-normal text-base w-full block text-center py-3 rounded-md leading-normal mt-3 cursor-pointer", children: "Subscribe Now" })
    ] }, index)) })
  ] }) });
}
export {
  Pricing as P
};
