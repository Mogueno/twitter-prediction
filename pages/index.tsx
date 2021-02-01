import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Prediction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/login">
        <a>Login to Twitter</a>
      </Link>
    </div>
  );
}
