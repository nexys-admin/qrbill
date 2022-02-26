import React from "react";
import { Link } from "react-router-dom";

import { version, githubUrlVersion } from '../config';

import Header from './header'

const Layout = () => <>
  <Header/>
  <div className="container">{props.children}</div>
  <footer><small><a href={githubUrlVersion}>{version}</a></small></footer>
</>
 
export default Layout;
