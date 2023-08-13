import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Welcome from "../sections/welcome";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Conexa Planet</title>
      </Head>
      <Navbar />
      <Welcome />
    </>
  );
}
