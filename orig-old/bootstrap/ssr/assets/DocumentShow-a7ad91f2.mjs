import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { A as App } from "./app-1510ab4d.mjs";
import { S as Sidebar } from "./sidebar-63cdcd15.mjs";
import { Head, Link } from "@inertiajs/inertia-react";
import ReactQuill from "react-quill";
import { useState, useRef, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { writeText } from "clipboard-polyfill";
import Swal from "sweetalert2";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "./Inputarea-e249f414.mjs";
import "openai";
import "axios";
const quill_snow = "";
function DocumentShow({ errors, document, openAi_api_key, logo, langs }) {
  useState(true);
  const messagesEndRef = useRef(null);
  const quillRef = useRef(null);
  const [quill, setQuill] = useState(null);
  useEffect(() => {
    setQuill(quillRef.current.editor);
  });
  if (quill) {
    quill.setContents([
      { insert: JSON.parse(document.data) }
    ]);
  }
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
  const copyToClipboard = () => {
    const data = quill.getText();
    console.log(data);
    writeText(data);
    Toast.fire({
      icon: "success",
      title: "Copy To Clipboard!"
    });
  };
  const get_content = (data) => {
    var delta = quill.getContents();
    quill.setContents([
      { insert: delta.ops[0].insert + data.get_content }
    ]);
    var mainContents = quill.getContents();
    var wordCount = data.get_content.split(" ").length;
    Inertia.post("create", {
      data: JSON.stringify(mainContents.ops[0].insert),
      fileId: data.fileId,
      wordCount
    });
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    const scrollHeight = messagesEndRef.current.scrollHeight;
    const height = messagesEndRef.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    messagesEndRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: document.name }) }),
    /* @__PURE__ */ jsxs(App, { logo, children: [
      /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:block sm:block", children: [
        /* @__PURE__ */ jsx(Sidebar, { apiKey: openAi_api_key, content: get_content, fileId: document.id, langs }),
        /* @__PURE__ */ jsxs("div", { className: " w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: " flex items-center align-middle justify-between px-5 border-b border-slate-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center py-3 w-11/12", children: [
              /* @__PURE__ */ jsx(Link, { href: "/user/dashboard", children: /* @__PURE__ */ jsx("i", { className: "ri-arrow-left-line text-2xl text-gray-600 mr-3" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 font-bold text-lg", children: document.name })
            ] }),
            /* @__PURE__ */ jsx("div", { className: " float-right" })
          ] }),
          /* @__PURE__ */ jsx("div", { ref: messagesEndRef, className: "w-full custom-editor-size", children: /* @__PURE__ */ jsx(ReactQuill, { ref: quillRef, theme: "snow" }) })
        ] })
      ] }),
      quill && quill.getText().length > 1 ? /* @__PURE__ */ jsx("div", { className: " absolute bottom-12 right-12 cursor-pointer", children: /* @__PURE__ */ jsxs("a", { onClick: copyToClipboard, className: " bg-indigo-500 text-white px-6 py-5 flex rounded-full", children: [
        /* @__PURE__ */ jsx("i", { className: "ri-file-copy-2-fill text-2xl" }),
        " "
      ] }) }) : /* @__PURE__ */ jsx("div", { className: " absolute bottom-12 right-12 cursor-not-allowed", children: /* @__PURE__ */ jsx("a", { className: " bg-slate-200 text-indigo-300 px-6 py-5 flex rounded-full", children: /* @__PURE__ */ jsx("i", { className: "ri-file-copy-2-fill text-2xl" }) }) })
    ] })
  ] });
}
export {
  DocumentShow as default
};
