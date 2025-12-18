import Sidebar from "@/Components/user/account/Sidebar";
import App from "@/Components/user/layout/app";
import { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";


export default function SelectPayment(props)
{
    const [ status, setStatus ] = useState(1)
    const [stripe, setStripe] = useState(null);


    useEffect(() => {
        // Load Stripe
        const stripePromise = loadStripe(props.data.STRIPE_PUBLISHABLE_KEY);
        stripePromise.then(stripe => {
          setStripe(stripe);
        });
    }, []);

    const stripePayment = (info) => {

        stripe.redirectToCheckout({
            mode: 'subscription',
            lineItems: [
                {
                    price: JSON.parse(info).api_id,
                    quantity: 1,
                },
            ],
            successUrl: props.data.url + 'user/payment/success?status=true&method=stripe',
            cancelUrl:  props.data.url + 'user/payment/cancel'
        });
    }

    return (
        <>
            <Head>
                <title>Select Payment</title>
            </Head>
            <App logo={props.logo}>
                <div className="container mx-auto my-20">
                    <div className="flex space-x-12">
                        <Sidebar />
                        <div className="w-3/4">
                            <div className=" border rounded-lg py-12 px-8">
                                <div className=" flex items-center justify-center space-x-8 border-b pb-12">
                                    {
                                        props.gateways.map((gateway, index) => (
                                            <div key={index}>
                                            {
                                                gateway.status == 'approved' && (
                                                    <div onClick={() => setStatus(gateway.id)}  className={status === gateway.id ? 'border rounded-lg cursor-pointer' : ' cursor-pointer'}>
                                                        <img className=" w-40 h-28 object-contain" src={gateway.logo} alt="" />
                                                    </div>
                                                )
                                            }

                                            </div>
                                        ))
                                    }

                                </div>
                                <div className=" text-center pt-12">
                                {
                                    props.gateways.map((gateway, index) => (
                                    status === gateway.id && (
                                        <div key={index}>
                                            {
                                                status === 2 && gateway.status == 'approved' && (
                                                    <a  onClick={() => status === 2 ? stripePayment(props.plan.data) : ''} className="bg-indigo-500 text-white px-12 py-3 rounded-md cursor-pointer"> Pay With {status === 2 ? 'Stripe' : 'Paypal'}</a>
                                                )
                                            }
                                            {



                                                status === 1 && gateway.status == 'approved' && (
                                                <PayPalScriptProvider options={{ "client-id": props.data.PAYPAL_CLIENT_ID, "currency": props.data.currency_name }}>
                                                    <PayPalButtons
                                                        createOrder={(data, actions) => {
                                                            return actions.order.create({
                                                                purchase_units: [
                                                                    {
                                                                        amount: {
                                                                            value: props.plan.price,
                                                                        },
                                                                    },
                                                                ],
                                                            });
                                                        }}
                                                        onApprove={(data, actions) => {
                                                            return actions.order.capture().then((details) => {
                                                                const name = details.payer.name.given_name;
                                                                Inertia.get(props.data.url + 'user/payment/success?status=true&method=paypal')
                                                            });
                                                        }}
                                                    />
                                                </PayPalScriptProvider>
                                                )

                                            }

                                        </div>

                                    )))
                                }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </App>
        </>
    )
}
