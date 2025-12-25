import { a as jsx, j as jsxs } from "../ssr.mjs";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
function Sidebar() {
  const handleLogout = () => {
    Inertia.get("/logout");
  };
  return /* @__PURE__ */ jsx("div", { className: "2xl:w-1/4 xl:w-1/4 lg:w-1/4 md:w-1/3 xs:w-full mb-12", children: /* @__PURE__ */ jsx("div", { className: " border px-8 py-8 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsx("li", { className: "py-3 text-base text-gray-600 font-medium", children: /* @__PURE__ */ jsx(Link, { href: "/user/account", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("i", { className: "ri-user-line mr-2 text-base" }),
      " ",
      /* @__PURE__ */ jsx("span", { children: "Edit Profile" })
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "py-3 text-base text-gray-600 font-medium", children: /* @__PURE__ */ jsx(Link, { href: "/user/plan", children: /* @__PURE__ */ jsxs("span", { className: " flex items-center", children: [
      /* @__PURE__ */ jsx("i", { className: "ri-file-list-3-line mr-2" }),
      " ",
      /* @__PURE__ */ jsx("span", { children: "Select Plan" })
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "py-3 text-base text-gray-600 font-medium", children: /* @__PURE__ */ jsx(Link, { href: "/user/payment/history", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("i", { className: "ri-bank-card-line mr-2" }),
      /* @__PURE__ */ jsx("span", { children: "Payment History" })
    ] }) }) }),
    /* @__PURE__ */ jsx("li", { className: "py-3 text-base text-gray-600 font-medium cursor-pointer", children: /* @__PURE__ */ jsx("a", { onClick: handleLogout, children: /* @__PURE__ */ jsxs("span", { className: " flex items-center", children: [
      /* @__PURE__ */ jsx("i", { className: "ri-logout-box-line mr-2" }),
      " ",
      /* @__PURE__ */ jsx("span", { children: "Logout" })
    ] }) }) })
  ] }) }) });
}
export {
  Sidebar as S
};
