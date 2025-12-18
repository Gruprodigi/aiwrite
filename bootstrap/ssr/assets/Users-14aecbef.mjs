import { a as jsx, F as Fragment, j as jsxs } from "../ssr.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
function Users({ data }) {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("h1", { children: [
    "User Lists ",
    data
  ] }) });
}
export {
  Users as default
};
