import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { F as FrontendApp } from "./Frontentapp-e05c4fbb.mjs";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "./Header-a48e5a63.mjs";
function Contact(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [status, setStatus] = useState(false);
  var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3e3,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
  });
  const onSubmit = (data) => {
    Inertia.visit("/contact", {
      method: "post",
      data,
      onBefore: (visit) => {
        setStatus(true);
      },
      onSuccess: () => {
        Toast.fire({
          icon: "success",
          title: "Message Successfully Sent!"
        });
        setStatus(false);
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: props.seo_contact.name }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: JSON.parse(props.seo_contact.seometa.value).meta_description }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: JSON.parse(props.seo_contact.seometa.value).meta_tag }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: JSON.parse(props.seo_contact.seometa.value).twitter_title })
    ] }),
    /* @__PURE__ */ jsxs(FrontendApp, { settings: props.settings, menuitems: props.menuitems, hero: props.hero, footer_first_menuitems: props.footer_first_menuitems, footer_second_menuitems: props.footer_second_menuitems, footer_third_menuitems: props.footer_third_menuitems, footer_four_menuitems: props.footer_four_menuitems, children: [
      /* @__PURE__ */ jsx("div", { className: " py-40 mt-8 bg-indigo-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "2xl:text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl font-bold text-slate-600", children: "Contact Us" }),
        /* @__PURE__ */ jsx("nav", { className: "flex justify-center px-5 py-3 text-gray-700 rounded-lg", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs("ol", { className: "inline-flex items-center space-x-1 md:space-x-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("a", { href: "#", className: "ml-1 text-lg font-light text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white", children: "Home" }) }) }),
          /* @__PURE__ */ jsx("li", { "aria-current": "page", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", className: "w-6 h-6 text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
            /* @__PURE__ */ jsx("span", { className: "ml-1 text-lg font-light text-gray-400 md:ml-2 dark:text-gray-400", children: "Contact Us" })
          ] }) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: " my-40 container mx-auto", children: /* @__PURE__ */ jsx("div", { className: " 2xl:w-2/3 xl:w-2/3 lg:w-2/3 md:w-2/3 sm:w-2/3 xs:w-full mx-auto", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
        /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:flex sm:flex xs:block 2xl:space-x-5 xl:space-x-5 lg:space-x-5 md:space-x-5 sm:space-x-5 xs:space-x-0 mb-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full 2xl:mb-0 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 xs:mb-5", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-slate-500 font-light mb-1", children: "Name" }),
            /* @__PURE__ */ jsx("input", { type: "text", ...register("name", { required: true }), className: "w-full px-4 h-12 border border-slate-300 rounded-md placeholder:text-sm placeholder:text-gray-400", placeholder: "Enter Your Name" }),
            errors.name && /* @__PURE__ */ jsx("span", { className: " font-light text-sm text-red-500", children: "The name field is required" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: " w-full", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-slate-500 font-light mb-1", children: "Email" }),
            /* @__PURE__ */ jsx("input", { type: "email", ...register("email", { required: true }), className: "w-full px-4 h-12 border border-slate-300 rounded-md placeholder:text-sm placeholder:text-gray-400", placeholder: "Enter Your Email" }),
            errors.email && /* @__PURE__ */ jsx("span", { className: " font-light text-sm text-red-500", children: "The email field is required" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-slate-500 font-light mb-1", children: "Subject" }),
          /* @__PURE__ */ jsx("input", { type: "text", ...register("subject", { required: true }), className: "w-full px-4 h-12 border border-slate-300 rounded-md placeholder:text-sm placeholder:text-gray-400", placeholder: "Enter Your Subject" }),
          errors.subject && /* @__PURE__ */ jsx("span", { className: " font-light text-sm text-red-500", children: "The subject field is required" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-slate-500 font-light mb-1", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { ...register("message", { required: true }), placeholder: "Write here...", rows: 5, className: "w-full px-4 border border-slate-300 rounded-md placeholder:text-sm placeholder:text-gray-400" }),
          errors.message && /* @__PURE__ */ jsx("span", { className: " font-light text-sm text-red-500", children: "The message field is required" })
        ] }),
        status ? /* @__PURE__ */ jsx("button", { disabled: true, className: " float-right bg-indigo-500 px-8 py-3 rounded-lg text-white font-light mt-3 cursor-not-allowed", children: "Sending ..." }) : /* @__PURE__ */ jsx("button", { type: "submit", className: " float-right bg-indigo-500 px-8 py-3 rounded-lg text-white font-light mt-3", children: "Send Message" })
      ] }) }) })
    ] })
  ] });
}
export {
  Contact as default
};
