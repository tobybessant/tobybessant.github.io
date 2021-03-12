import Head from "next/head";
import Header from "../../src/components/Header/Header";

export default function Contact() {
  return (
    <div className="app">
      <Head>
        <title>Toby Bessant | Software Developer | CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
