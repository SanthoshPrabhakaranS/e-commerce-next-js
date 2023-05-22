import React from "react";
import Navbar from "../navbar";
import Header from "../header";
import Footer from "../footer";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <main className="w-full h-full flex flex-col relative">
      <div className="sticky top-0 z-50">
        <Header />
        <Navbar />
      </div>
      <div className="">{children}</div>
      {pathname === "/cart" ? null : <Footer />}
    </main>
  );
};

export default Layout;
