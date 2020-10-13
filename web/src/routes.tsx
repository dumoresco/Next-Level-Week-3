import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/Orphanages";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/orphanages-map" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
