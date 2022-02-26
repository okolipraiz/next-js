import Head from "next/head";
import Link from "next/link";

const Home = () => {
    const blog = "There is a perfect happiness once u understand something"

    return ( 
    <>
    <Head>
        <title>My landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div> Hello, {blog} </div>
        <Link href="/">
        <a>Go back home</a>
        </Link>
    </>
     );
}
 
export default Home;
