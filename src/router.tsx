import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Layout from "./layout";

import Convert from "./ui/convert";
import Validate from "./ui/validate";
import QrReader from "./ui/qr-reader";
import QrWriter from "./ui/qr-writer";
import Main from "./ui";

//import { dataLabels } from ".//lib/data-examples";

const NotFound = () => <p>Page Not Found</p>;

function Router(props: any) {
  //
  return (
    <Layout>
      <Switch>
        <Route exact path={"/"} component={Main} />
        <Route exact path="/qr/read" component={QrReader} props={props} />
        <Route
          exact
          path={"/qr/write"}
          component={() => <QrWriter />}
          props={props}
        />
        <Route exact path={"/convert"} component={Convert} props={props} />
        <Route exact path={"/validate"} component={Validate} props={props} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default withRouter(Router);
