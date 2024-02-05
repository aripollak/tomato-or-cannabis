import React from "react";
import { Switch, Route } from "wouter";
import Home from "../pages/home";

/**
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

export default () => (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
);
