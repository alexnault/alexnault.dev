import React from "react";
import { Transition } from "@headlessui/react";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Transition
        appear
        show
        enter="duration-150"
        enterFrom="opacity-0 translate-y-8"
        enterTo="opacity-100 translate-y-0"
      >
        <main>{children}</main>
        <Footer />
      </Transition>
    </>
  );
}
