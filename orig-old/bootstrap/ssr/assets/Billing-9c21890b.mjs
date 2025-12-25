import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { S as Sidebar } from "./Sidebar-b5cabf7d.mjs";
import { A as App } from "./app-1510ab4d.mjs";
import { Head } from "@inertiajs/inertia-react";
import moment from "moment/moment.js";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "@inertiajs/inertia";
function Billing({ transactions, currency, logo }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Payment History" }) }),
    /* @__PURE__ */ jsx(App, { logo, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto my-20", children: /* @__PURE__ */ jsxs("div", { className: "2xl:flex lg:flex md:flex sm:block 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12", children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsx("div", { className: " 2xl:w-3/4 xl:w-3/4 lg:w-3/4", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto relative w-full", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left text-gray-500 dark:text-gray-400", children: [
        /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-700 uppercase bg-blue-50", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "col", className: "py-4 text-gray-500 font-bold text-md px-6", children: "Date" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "py-4 text-gray-500 font-bold text-md px-6", children: "Trx Id" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "py-4 text-gray-500 font-bold text-md px-6", children: "Payment Method" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "py-4 text-gray-500 font-bold text-md px-6", children: "Price" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "py-4 text-gray-500 font-bold text-md px-6", children: "Status" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: transactions.data.map((value, index) => /* @__PURE__ */ jsxs("tr", { className: "bg-white border-b border-gray-100", children: [
          /* @__PURE__ */ jsx("td", { className: "py-4 px-6", children: moment(value.created_at).format("LL") }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-6", children: value.trx_id }),
          /* @__PURE__ */ jsx("td", { className: "text-center", children: value.payment_method }),
          /* @__PURE__ */ jsxs("td", { className: "py-4 px-6", children: [
            currency,
            value.amount
          ] }),
          /* @__PURE__ */ jsx("td", { className: "py-4 px-6", children: value.status === "approved" ? /* @__PURE__ */ jsx("span", { className: "bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs", children: "Paid " }) : /* @__PURE__ */ jsx("span", { className: "bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs", children: "Failed " }) })
        ] }, index)) })
      ] }) }) })
    ] }) }) })
  ] });
}
export {
  Billing as default
};
