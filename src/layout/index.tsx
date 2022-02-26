import React from "react";

import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <>
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </>
);

export default Layout;
