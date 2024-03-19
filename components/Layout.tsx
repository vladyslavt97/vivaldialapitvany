import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
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
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
