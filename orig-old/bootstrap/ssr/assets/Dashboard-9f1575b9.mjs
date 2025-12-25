import { a as jsx, j as jsxs, F as Fragment } from "../ssr.mjs";
import { S as Sidebar } from "./sidebar-63cdcd15.mjs";
import { A as App } from "./app-1510ab4d.mjs";
import { Link, Head } from "@inertiajs/inertia-react";
import moment from "moment/moment.js";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
import "./Inputarea-e249f414.mjs";
import "openai";
import "axios";
import "sweetalert2";
const quill_snow = "";
function Pagination({ links }) {
  function getClassName(active) {
    if (active) {
      return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-indigo-500 hover:text-white focus:border-primary focus:text-primary bg-indigo-500 text-white";
    } else {
      return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-indigo-500 hover:text-white focus:border-primary focus:text-primary";
    }
  }
  return links.length > 3 && /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap mt-8", children: links.map((link, key) => link.url === null ? /* @__PURE__ */ jsx(
    "div",
    {
      className: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded",
      dangerouslySetInnerHTML: { __html: link.label }
    }
  ) : /* @__PURE__ */ jsx(
    Link,
    {
      className: getClassName(link.active),
      href: link.url,
      dangerouslySetInnerHTML: { __html: link.label }
    }
  )) }) });
}
function Dashboard({ openAi_api_key, documents, logo, langs }) {
  const [modalStatus, setModalStatus] = useState();
  const [documentName, setDocumentName] = useState();
  const [error, setError] = useState({
    param: "",
    msg: ""
  });
  const [documentId, setDocumentId] = useState();
  const modalShow = (name, id) => {
    setModalStatus(true);
    setDocumentName(name);
    setDocumentId(id);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!documentName) {
      return setError({
        param: "rename",
        msg: "The Document Name Field is Required"
      });
    }
    Inertia.put(`/user/rename/${documentId}/file`, {
      name: documentName
    });
    setModalStatus(false);
  };
  const deleteDocument = (id) => {
    if (window.confirm("Are you sure you want to delete this document?")) {
      Inertia.delete(`/user/file/delete/` + id);
    }
  };
  const onFavoriteClick = (id) => {
    Inertia.post("/user/file/favorite/" + id, {
      "id": id
    });
  };
  const new_document = () => {
    Inertia.get("/user/document/create", {
      data: JSON.stringify("")
    });
  };
  const get_content = (data) => {
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "User Dashboard" }) }),
    /* @__PURE__ */ jsx(App, { logo, children: /* @__PURE__ */ jsxs("div", { className: "2xl:flex xl:flex lg:flex md:block sm:block", children: [
      /* @__PURE__ */ jsx(Sidebar, { apiKey: openAi_api_key, content: get_content, langs }),
      /* @__PURE__ */ jsxs("div", { className: "w-full min-sidebar-custom-height overflow-y-scroll relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "px-8 flex items-center justify-between border-b border-slate-200 py-4", children: [
          /* @__PURE__ */ jsx("h5", { className: " text-slate-500 font-semibold text-lg", children: "Document Lists" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxs(Link, { href: "?favorite=all", className: "flex items-center mr-8 text-base text-slate-600 font-semibold", children: [
              /* @__PURE__ */ jsx("i", { className: "ri-star-s-fill text-slate-500 text-xl mr-1" }),
              " Favorites"
            ] }),
            /* @__PURE__ */ jsxs("a", { onClick: new_document, className: "flex items-center text-base text-slate-600 font-semibold cursor-pointer", children: [
              /* @__PURE__ */ jsx("i", { className: "ri-file-add-line mr-1 text-slate-500 text-md mr-1" }),
              " New Document"
            ] })
          ] })
        ] }),
        documents.data.length > 0 ? /* @__PURE__ */ jsxs("div", { className: "overflow-x-auto", children: [
          /* @__PURE__ */ jsxs("table", { className: "w-full text-sm text-left text-gray-500", children: [
            /* @__PURE__ */ jsx("thead", { className: "text-xs text-gray-700 uppercase bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { className: "text-sm text-slate-500", children: [
              /* @__PURE__ */ jsx("th", { scope: "col", className: "py-4 px-8", children: "Name" }),
              /* @__PURE__ */ jsx("th", { scope: "col", className: "py-4 px-8", children: "Words" }),
              /* @__PURE__ */ jsx("th", { scope: "col", className: "py-4 px-8", children: "Modified" }),
              /* @__PURE__ */ jsx("th", {}),
              /* @__PURE__ */ jsx("th", {})
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { className: "text-base", children: documents.data.map((value, index) => /* @__PURE__ */ jsxs("tr", { className: "bg-white border-b", children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 px-8", children: /* @__PURE__ */ jsx(Link, { href: `/user/file/${value.slug}`, children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("i", { className: "ri-file-text-fill text-lg text-slate-500 mr-2" }),
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-gray-900", children: value.name })
              ] }) }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-12", children: value.count }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-8", children: moment(value.updated_at).format("lll") }),
              /* @__PURE__ */ jsx("td", { className: "py-3 px-8", children: /* @__PURE__ */ jsx("a", { onClick: () => onFavoriteClick(value.id), className: " cursor-pointer", children: /* @__PURE__ */ jsx("i", { className: value.is_favourite === 1 ? "ri-star-fill text-indigo-500 text-base" : "ri-star-fill text-base" }) }) }),
              /* @__PURE__ */ jsx("td", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "group transition-all delay-100", children: [
                /* @__PURE__ */ jsx("i", { className: "ri-more-2-fill text-xl cursor-pointer" }),
                /* @__PURE__ */ jsx("div", { className: "text-left absolute z-50 right-0 w-52 bg-white rounded divide-y divide-gray-100 custom-shadow hidden group-hover:block transition-all delay-100", children: /* @__PURE__ */ jsxs("ul", { className: "py-3 text-sm text-gray-700", "aria-labelledby": "dropdownMenuIconButton", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { onClick: () => modalShow(value.name, value.id), className: "block py-2 px-5 hover:bg-gray-100 cursor-pointer ", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("i", { className: "ri-edit-line mr-2" }),
                    " ",
                    /* @__PURE__ */ jsx("span", { children: "Rename" })
                  ] }) }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: `/user/file/` + value.slug, className: "block py-2 px-5 hover:bg-gray-100", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("i", { className: "ri-file-edit-line mr-2" }),
                    " ",
                    /* @__PURE__ */ jsx("span", { children: "Edit Document" })
                  ] }) }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { onClick: () => deleteDocument(value.id), className: "block py-2 px-5 hover:bg-gray-100  cursor-pointer", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                    /* @__PURE__ */ jsx("i", { className: "ri-delete-bin-line mr-2" }),
                    " ",
                    /* @__PURE__ */ jsx("span", { children: "Delete Document" })
                  ] }) }) })
                ] }) })
              ] }) })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: " float-right pr-2 mb-12", children: /* @__PURE__ */ jsx(Pagination, { className: "mt-6", links: documents.links }) })
        ] }) : /* @__PURE__ */ jsx("div", { className: " flex items-center justify-center min-document-custom-height", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxs("svg", { className: "text-8xl fill-slate-200 font-light inline-block", xmlns: "http://www.w3.org/2000/svg", width: "100", height: "100", fill: "currentColor", viewBox: "0 0 16 16", children: [
            /* @__PURE__ */ jsx("path", { d: "M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z" }),
            /* @__PURE__ */ jsx("path", { d: "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "  text-gray-300 mt-5 text-xl", children: [
            "No Document Found. Create a ",
            /* @__PURE__ */ jsx("a", { onClick: new_document, className: "cursor-pointer text-indigo-300 font-normal hover:text-indigo-500 transition delay-75", children: "New Document" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: modalStatus ? "fixed z-10 inset-0 overflow-y-auto" : "hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen", "aria-hidden": "true", children: "​" }),
      /* @__PURE__ */ jsx("div", { className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full", role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-headline", children: /* @__PURE__ */ jsxs("form", { onSubmit: onHandleSubmit, children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg leading-6 text-gray-600 font-semibold", id: "modal-headline", children: "Rename Document Name" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxs("div", { className: "mt-7", children: [
            /* @__PURE__ */ jsx("label", { className: "text-gray-500 font-normal text-base mb-4", children: "Document Name" }),
            /* @__PURE__ */ jsx("input", { onChange: (e) => setDocumentName(e.target.value), type: "text", value: documentName || "", placeholder: "Enter Document Name", className: " bg-user-dashboard rounded-md px-4 h-12 w-full mt-2 placeholder:text-sm placeholder:font-light focus:outline-none border border-slate-300 focus:outline-0 focus:shadow-none" }),
            error && error.param === "rename" && /* @__PURE__ */ jsx("span", { className: " text-red-500", children: error.msg })
          ] }) })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse", children: [
          /* @__PURE__ */ jsx("button", { type: "submit", className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm", children: "Update Name" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setModalStatus(false), type: "button", className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm", children: "Cancel" })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  Dashboard as default
};
