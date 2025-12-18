import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { useEffect } from "react";
import { I as InputError } from "./InputError-524df241.mjs";
import { useForm, Head, Link } from "@inertiajs/inertia-react";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
function Register({ logo }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("register"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Register" }) }),
    /* @__PURE__ */ jsx("div", { className: "  2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 xs:w-11/12 mx-auto my-24", children: /* @__PURE__ */ jsxs("div", { className: " text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-12", children: /* @__PURE__ */ jsx("img", { className: " h-8", src: "/storage/" + logo, alt: "" }) }),
      /* @__PURE__ */ jsx("h2", { className: " font-sans text-4xl text-slate-600 font-extrabold ", children: "Sign Up" }),
      /* @__PURE__ */ jsx("p", { className: " text-gray-400 font-light my-3", children: "Please fill up all input field correctly then click register button. If your information is correct then it will register your account. " }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: " mt-7", children: [
        /* @__PURE__ */ jsxs("div", { className: " mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: " block text-left text-slate-500 mb-1 text-base", htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ jsx("input", { onChange: (e) => onHandleChange(e), className: " w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5", type: "text", name: "name", id: "name" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.name, className: "mt-1 text-left" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: " block text-left text-slate-500 mb-1 text-base", htmlFor: "email", children: "Email Address" }),
          /* @__PURE__ */ jsx("input", { onChange: (e) => onHandleChange(e), className: " w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5", type: "email", name: "email", id: "email" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-1 text-left" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: " block text-left text-slate-500 mb-1 text-base", htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsx("input", { className: " w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5", type: "password", onChange: (e) => onHandleChange(e), name: "password", id: "password" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-1 text-left" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: " mb-4", children: [
          /* @__PURE__ */ jsx("label", { className: " block text-left text-slate-500 mb-1 text-base", htmlFor: "password_confirmation", children: "Confirm Password" }),
          /* @__PURE__ */ jsx("input", { className: " w-full border border-slate-200 rounded-lg focus:ring-0 focus:border px-5", type: "password", onChange: (e) => onHandleChange(e), name: "password_confirmation", id: "password_confirmation" }),
          /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-1 text-left" })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: " mt-2 py-3 rounded-lg bg-indigo-500 text-white w-full mb-2", children: "Register" }),
        /* @__PURE__ */ jsxs("p", { className: " text-gray-500 font-light text-sm", children: [
          "Already Have An Account? ",
          /* @__PURE__ */ jsx(Link, { className: " text-indigo-500 font-normal", href: "/login", children: "Login" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Register as default
};
