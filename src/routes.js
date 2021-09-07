import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";

export default function BaseRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
