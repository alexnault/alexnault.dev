import React from "react";

import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header logoText="alexnault" />
      <main className="py-10 sm:py-12">{children}</main>
      <Footer />
    </>
  );
}
