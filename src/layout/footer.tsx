import React from "react";

import { version, githubUrlVersion } from "../config";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <span className="text-muted">
        <a href={githubUrlVersion}>{version}</a>
      </span>
    </div>
  </footer>
);

export default Footer;
