import React from "react";

import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="mt-16 py-10 sm:py-12">{children}</main>
      <Footer />
    </>
  );
}
