import Head from "next/head";
import Landing from "../src/components/Landing/Landing";
import Header from "../src/components/Header/Header";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>Toby Bessant | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Landing />
    </div>
  );
}
