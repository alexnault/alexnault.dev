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
      <main className="content">{children}</main>
      <Footer />
    </>
  );
}
