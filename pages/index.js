import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useAuth from "../lib/useAuth";

export default function Home() {
  const { user } = useAuth();
  console.log(user?.displayName);
  return (
    <div className="flex justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center flex-col">
        {user && (
          <h1 className="text-3xl pt-10 ">
            Welcome back <span className="italic">{user.displayName}</span>
          </h1>
        )}
        <h1 className="text-3xl pt-10 ">This is the home component</h1>
      </div>
    </div>
  );
}
