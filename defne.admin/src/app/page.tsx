import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Banner from "./banner/page";
import React from "react";

export const metadata: Metadata = {
  title:
    "Defne Admin",
  description: "This is Defne Dashboard",
};

const Home : React.FC = () => {
  return (
    <>

      <DefaultLayout>
        <Banner />
      </DefaultLayout>
    </>
  );
}


export default Home;
