import { j as jsxs, F as Fragment, a as jsx } from "../ssr.mjs";
import { H as Header, F as Footer } from "./Header-a48e5a63.mjs";
function FrontendApp({ children, settings, hero, menuitems, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Header, { logo: settings.site_logo, button_title: hero.button_title, button_url: hero.button_url, menuitems }),
    children,
    /* @__PURE__ */ jsx(Footer, { copyright: settings.copyright, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems })
  ] });
}
export {
  FrontendApp as F
};
