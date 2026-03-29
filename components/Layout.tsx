import Head from "next/head";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const bodyFont = Manrope({
    subsets: ["latin"],
    variable: "--font-body",
});

const displayFont = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-display",
});

export default function Layout({ children }: LayoutProps) {
    return (
        <div
            className={`${bodyFont.variable} ${displayFont.variable} relative min-h-screen overflow-hidden bg-[#f4efe6] text-stone-900`}
        >
            <Head>
                <title>Vivaldi Alapítvány</title>
                <meta
                    name="description"
                    content="A Vivaldi Alapítvány célja kulturális programok szervezése, művészeti, kulturális nevelés, oktatás és a támogatottak művészeti pályájának elősegítése, a magyar szellemi, művészeti értékek és hagyományok feltárása és megismertetése."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(81,111,88,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(177,146,105,0.16),_transparent_28%),linear-gradient(180deg,_#faf6ee_0%,_#f2ede4_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-[linear-gradient(180deg,_rgba(255,255,255,0.48),_transparent)]" />
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
