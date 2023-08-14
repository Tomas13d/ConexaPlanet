import Head from "next/head";
import Welcome from "../sections/welcome";
import Navbar from "../components/navbar";
import People from "../sections/people";
import Ships from "../sections/ships";
import Planets from "../sections/planets";
import Movies from "../sections/movies";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Conexa Planet</title>
      </Head>
      <div className={styles.mainContainer}>
        <Navbar />
        <Welcome />
        <People />
        <Movies />
        <Ships />
        <Planets />
      </div>
    </>
  );
}
