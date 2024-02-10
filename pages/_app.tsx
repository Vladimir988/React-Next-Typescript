import '../styles/common.scss';
import vars from '../styles/variables.module.scss';
import Navbar from "../components/Navbar";

export default function App({Component, pageProps}) {
    return (
        <div className="App" color={vars.primary}>
            <Navbar />
            <Component {...pageProps} />
        </div>
    )
}