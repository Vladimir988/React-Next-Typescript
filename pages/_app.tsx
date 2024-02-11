import '../styles/common.scss';
import vars from '../styles/variables.module.scss';
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function App({Component, pageProps}) {
    return (
        <div className="App" color={vars.primary}>
            <Head>
                <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"/>
                <link rel="icon" sizes="16x16 32x32 48x48 64x64" type="image/x-icon" href="/static/favicon.ico"/>
            </Head>
            <Navbar/>
            <Component {...pageProps} />
        </div>
    )
}