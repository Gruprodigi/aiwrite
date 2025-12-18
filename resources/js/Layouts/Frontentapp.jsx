import Footer from "./partials/Footer";
import Header from "./partials/Header";

export default function FrontendApp({ children, settings, hero, menuitems, footer_first_menuitems, footer_second_menuitems, footer_third_menuitems, footer_four_menuitems })
{

    return (
        <>
            <Header logo={settings.site_logo} button_title={hero.button_title} button_url={hero.button_url} menuitems={menuitems}  />
            { children }
            <Footer copyright={settings.copyright} footer_first_menuitems={footer_first_menuitems} footer_second_menuitems={footer_second_menuitems} footer_third_menuitems={footer_third_menuitems} footer_four_menuitems={footer_four_menuitems} />
        </>
    )
}
