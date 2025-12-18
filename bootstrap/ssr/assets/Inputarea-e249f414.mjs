import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
function InputArea({ label, type, name, value, placeholder, defaultValue, className, onHandleChange }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("label", { className: " text-slate-700 text-base font-normal", children: label }),
    /* @__PURE__ */ jsx("input", { type: type ? type : "text", name, defaultValue, onChange: (e) => onHandleChange(e), value, placeholder, className: `w-full rounded-lg mt-1 border border-gray-300 py-3 px-4 text-black h-14` + className })
  ] });
}
export {
  InputArea as I
};
