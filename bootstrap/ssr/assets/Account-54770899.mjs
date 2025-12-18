import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { I as InputArea } from "./Inputarea-e249f414.mjs";
import { A as App } from "./app-1510ab4d.mjs";
import { Inertia } from "@inertiajs/inertia";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Head } from "@inertiajs/inertia-react";
import { S as Sidebar } from "./Sidebar-b5cabf7d.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
function Account(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [currentPassword, setCurrentPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState({
    param: "",
    msg: ""
  });
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
  useEffect(() => {
    setName(props.user.name);
    setEmail(props.user.email);
  }, [props.user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setError({
      param: "",
      msg: ""
    });
    if (!name) {
      return setError({
        param: "name",
        msg: "The Name Field Is Required"
      });
    }
    if (!email) {
      return setError({
        param: "email",
        msg: "The Email Field Is Required"
      });
    }
    if (currentPassword) {
      if (!currentPassword) {
        return setError({
          param: "currentPassword",
          msg: "The Current Password Field Is Required"
        });
      }
      if (!password) {
        return setError({
          param: "password",
          msg: "The Password Field Is Required"
        });
      }
      if (!confirmPassword) {
        return setError({
          param: "confirmPassword",
          msg: "The Confirm Password Field Is Required"
        });
      }
      if (password != confirmPassword) {
        return setError({
          param: "password",
          msg: "The Confirm Password doesn't match."
        });
      }
    }
    Inertia.visit("/user/account", {
      method: "post",
      data: {
        name,
        email,
        currentPassword,
        password,
        confirmPassword
      },
      onSuccess: (page) => {
        Toast.fire({
          icon: "success",
          title: "Successfully Updated!"
        });
      },
      onError: (errors) => {
        Toast.fire({
          icon: "error",
          title: errors.currentPassword
        });
      }
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Edit Profile" }) }),
    /* @__PURE__ */ jsx(App, { logo: props.logo, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto my-20", children: /* @__PURE__ */ jsxs("div", { className: "2xl:flex lg:flex md:flex sm:block 2xl:space-x-12 xl:space-x-12 lg:space-x-12 md:space-x-12", children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsxs("div", { className: "2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full", children: [
        /* @__PURE__ */ jsx("h1", { className: " text-slate-600 text-2xl font-medium", children: "Edit Profile Information" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx(InputArea, { defaultValue: props.user.name, label: "Name", onHandleChange: (e) => setName(e.target.value) }),
            error && error.param === "name" && /* @__PURE__ */ jsx("span", { className: " text-red-500 text-sm", children: error.msg })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsx(InputArea, { defaultValue: props.user.email, label: "Email", type: "email", onHandleChange: (e) => setEmail(e.target.value) }),
            error && error.param === "email" && /* @__PURE__ */ jsx("span", { className: " text-red-500 text-sm", children: error.msg })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: " mt-12", children: [
            /* @__PURE__ */ jsx("h5", { className: "text-slate-600 text-2xl font-medium", children: "Change Your Password" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
              /* @__PURE__ */ jsx(InputArea, { label: "Current Password", type: "password", onHandleChange: (e) => setCurrentPassword(e.target.value) }),
              error && error.param === "currentPassword" && /* @__PURE__ */ jsx("span", { className: " text-red-500 text-sm", children: error.msg })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
              /* @__PURE__ */ jsx(InputArea, { label: "Password", type: "password", onHandleChange: (e) => setPassword(e.target.value) }),
              error && error.param === "password" && /* @__PURE__ */ jsx("span", { className: " text-red-500 text-sm", children: error.msg })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
              /* @__PURE__ */ jsx(InputArea, { label: "Confirmation Password", type: "password", onHandleChange: (e) => setConfirmPassword(e.target.value) }),
              error && error.param === "confirmPassword" && /* @__PURE__ */ jsx("span", { className: " text-red-500 text-sm", children: error.msg })
            ] }),
            /* @__PURE__ */ jsx("div", { className: " mt-5 float-right mb-20", children: /* @__PURE__ */ jsx("button", { type: "submit", className: " bg-indigo-500 py-3 px-12 text-white text-base rounded-md", children: "Update" }) })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  Account as default
};
