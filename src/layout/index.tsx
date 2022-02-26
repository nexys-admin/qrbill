import React from "react";

import { version, githubUrlVersion } from "../config";

import Header from "./header";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <>
    <Header />
    <div className="container">{children}</div>
    <footer>
      <small>
        <a href={githubUrlVersion}>{version}</a>
      </small>
    </footer>
  </>
);

export default Layout;
