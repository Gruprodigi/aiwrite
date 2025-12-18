import { j as jsxs, a as jsx } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
function Success() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Payment Successful" }),
    /* @__PURE__ */ jsx("p", { children: "Your session ID is: " })
  ] });
}
export {
  Success as default
};
