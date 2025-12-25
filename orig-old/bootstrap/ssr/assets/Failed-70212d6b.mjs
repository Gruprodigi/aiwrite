import { a as jsx, F as Fragment } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
function Failed() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("h2", { children: "Payment Failed" }) });
}
export {
  Failed as default
};
