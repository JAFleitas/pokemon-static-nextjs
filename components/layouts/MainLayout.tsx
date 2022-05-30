import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon-App"}</title>
        <meta name="author" content="Gonzalo Fleitas" />
        <meta name="description" content="Informacion sobre el pokemon XXXX" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
      </Head>

      <Navbar />

      <main style={{ padding: "0 20px" }}>{children}</main>
    </>
  );
};
