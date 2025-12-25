import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/Layouts/partials/Header';
import Footer from '@/Layouts/partials/Footer';
import Hero from '@/Components/frontend/Hero';
import Brand from '@/Components/frontend/Brand';
import UseCase from '@/Components/frontend/UseCase';
import Howitworks from '@/Components/frontend/Howitworks';
import Pricing from '@/Components/frontend/Pricing';
import Level from '@/Components/frontend/Level';
import { Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {

    AOS.init();


    return (
        <>
            <Head>
                <title>{props.seo_home.name}</title>
                <meta name='description' content={JSON.parse(props.seo_home.seometa.value).meta_description}/>
                <meta name='keywords' content={JSON.parse(props.seo_home.seometa.value).meta_tag}/>

                <meta name="twitter:title" content={JSON.parse(props.seo_home.seometa.value).twitter_title}></meta>
            </Head>
            <div className='bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url('/assets/img/hero.jpg')` }}>
                <div className=' container mx-auto'>
                    {/* header area start */}
                    <Header favicon={props.settings.site_favicon} logo={props.settings.site_logo} button_title={props.hero.button_title} button_url={props.hero.button_url} menuitems={props.menuitems} />
                    {/* header area end */}
                    {/* hero area start */}
                    <Hero hero={props.hero} usecases={props.usecases}  />
                    {/* hero area end */}
                </div>
            </div>
            {/* brand area start */}
            <Brand brands={props.brands} title={props.settings.brand_title} />
            {/* brand area end */}
            {/* useCase area start */}
            <UseCase usecases={props.usecases} title={props.settings.case_title} description={props.settings.case_description} />
            {/* useCase area end */}
            {/* how it works area start */}
            <Howitworks data={props.howitworks} title={props.settings.how_it_works_title} />
            {/* how it works area end */}
            {/* pricing area start */}
            <Pricing plans={props.plans} title={props.settings.plan_title} currency={props.currency} />
            {/* pricing area end */}
            {/* ready area start */}
            <Level level={props.level} />
            {/* ready area end */}
            {/* footer area start */}
            <Footer copyright={props.settings.copyright} footer_first_menuitems={props.footer_first_menuitems} footer_second_menuitems={props.footer_second_menuitems} footer_third_menuitems={props.footer_third_menuitems} footer_four_menuitems={props.footer_four_menuitems} />
            {/* footer area end */}
        </>

    );
}
