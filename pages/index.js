import Head from "next/head";
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter()

    const handleClick = (e) => {
        e.preventDefault();
        router.push('/Pokemon')
    }

    return ( 
    <>
    <Head>
        <title>My landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div> Hello Earthlings </div>
        
        <button onClick={handleClick}>
            click me!
        </button>
    </>
     );
}
 
export default Home;
