import Head from "next/head";

const PageHead = ({keywords = 'page-keywords', title = 'Page title'}) => {
    return (
        <Head>
            <meta keywords={keywords}></meta>
            <meta name="title" content={title}/>
            <title>{title}</title>
        </Head>
    );
};

export default PageHead;