import Header from './header';
import Footer from './Footer/footer';
import Head from "next/head";
import '../../app/globals.css'

export default function format({children}: {children: any}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
                <link rel="stylesheet" href="/dist/socials.css" />
                <link rel="stylesheet" href="/dist/main.css" />
                <title>Fruki</title>
            </Head>
            <Header />
            <main className='min-h-full w-full'>
                {children}
            </main>
            <Footer />
        </>
    );
}