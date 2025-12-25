import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { S as Sidebar } from "./Sidebar-b5cabf7d.mjs";
import { A as App } from "./app-1510ab4d.mjs";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
function SelectPayment(props) {
  const [status, setStatus] = useState(1);
  const [stripe, setStripe] = useState(null);
  useEffect(() => {
    const stripePromise = loadStripe(props.data.STRIPE_PUBLISHABLE_KEY);
    stripePromise.then((stripe2) => {
      setStripe(stripe2);
    });
  }, []);
  const stripePayment = (info) => {
    stripe.redirectToCheckout({
      mode: "subscription",
      lineItems: [
        {
          price: JSON.parse(info).api_id,
          quantity: 1
        }
      ],
      successUrl: props.data.url + "user/payment/success?status=true&method=stripe",
      cancelUrl: props.data.url + "user/payment/cancel"
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { children: /* @__PURE__ */ jsx("title", { children: "Select Payment" }) }),
    /* @__PURE__ */ jsx(App, { logo: props.logo, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto my-20", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-12", children: [
      /* @__PURE__ */ jsx(Sidebar, {}),
      /* @__PURE__ */ jsx("div", { className: "w-3/4", children: /* @__PURE__ */ jsxs("div", { className: " border rounded-lg py-12 px-8", children: [
        /* @__PURE__ */ jsx("div", { className: " flex items-center justify-center space-x-8 border-b pb-12", children: props.gateways.map((gateway, index) => /* @__PURE__ */ jsx("div", { children: gateway.status == "approved" && /* @__PURE__ */ jsx("div", { onClick: () => setStatus(gateway.id), className: status === gateway.id ? "border rounded-lg cursor-pointer" : " cursor-pointer", children: /* @__PURE__ */ jsx("img", { className: " w-40 h-28 object-contain", src: gateway.logo, alt: "" }) }) }, index)) }),
        /* @__PURE__ */ jsx("div", { className: " text-center pt-12", children: props.gateways.map((gateway, index) => status === gateway.id && /* @__PURE__ */ jsxs("div", { children: [
          status === 2 && gateway.status == "approved" && /* @__PURE__ */ jsxs("a", { onClick: () => status === 2 ? stripePayment(props.plan.data) : "", className: "bg-indigo-500 text-white px-12 py-3 rounded-md cursor-pointer", children: [
            " Pay With ",
            status === 2 ? "Stripe" : "Paypal"
          ] }),
          status === 1 && gateway.status == "approved" && /* @__PURE__ */ jsx(PayPalScriptProvider, { options: { "client-id": props.data.PAYPAL_CLIENT_ID, "currency": props.data.currency_name }, children: /* @__PURE__ */ jsx(
            PayPalButtons,
            {
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: props.plan.price
                      }
                    }
                  ]
                });
              },
              onApprove: (data, actions) => {
                return actions.order.capture().then((details) => {
                  details.payer.name.given_name;
                  Inertia.get(props.data.url + "user/payment/success?status=true&method=paypal");
                });
              }
            }
          ) })
        ] }, index)) })
      ] }) })
    ] }) }) })
  ] });
}
export {
  SelectPayment as default
};
