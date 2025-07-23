import localFont from "next/font/local";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../Loader";

const Layout = ({ children }) => {
    return (
        <main className={`${Roobert.variable} ${TWK.variable} antialiased`}>
            <Loader />
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout;

const Roobert = localFont({

    src: [
        { path: "../../app/fonts/RoobertTRIAL-Light.woff2", weight: "300", style: "normal" },
        { path: "../../app/fonts/RoobertTRIAL-Regular.woff2", weight: "400", style: "normal" },
        { path: "../../app/fonts/RoobertTRIAL-Medium.woff2", weight: "500", style: "normal" },
        { path: "../../app/fonts/RoobertTRIAL-SemiBold.woff2", weight: "600", style: "normal" },
        { path: "../../app/fonts/RoobertTRIAL-Bold.woff2", weight: "700", style: "normal" },
    ],
    variable: "--font-body",
    display: "swap",
    fallback: ["system-ui, sans-serif"],
})

const TWK = localFont({
    src: [
        { path: "../../app/fonts/TWKLausanne.woff2", weight: "400", style: "normal" },
        // { path: "../../app/fonts/TWKLausanne-200.woff2", weight: "200", style: "normal" },
        { path: "../../app/fonts/TWKLausanne-250.woff2", weight: "500", style: "normal" },
    ],
    variable: "--font-display",
    display: "swap",
    fallback: ["system-ui, sans-serif"],
})