import Navbar from "./partials/navbar";

export default function App({ children, logo })
{
    return (
        <>
            <div>
                <Navbar logo={logo} />
                { children }
            </div>
        </>
    )
}
