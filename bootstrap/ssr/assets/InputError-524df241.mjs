import { a as jsx } from "../ssr.mjs";
function InputError({ message, className = "" }) {
  return message ? /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600 " + className, children: message }) : null;
}
export {
  InputError as I
};
