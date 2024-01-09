import Head from "next/head";
import {useRouter} from "next/router";

const Custom404 = () => {
    const router = useRouter();

    return (
        <div className="w-screen h-screen flex flex-col">
            <Head>
                <title>Page Not Found</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="flex-grow flex flex-col justify-center items-center space-y-5 w-full bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300">
                <h2 className="text-7xl">404</h2>
                <p className="text-xl pb-10">This page could not be found</p>
                <button className="text-lg justify-start bg-slate-600 rounded-xl p-4" onClick={() => router.push("/")}>Go to home page</button>
            </main>
        </div>
    );
};

export default Custom404;
