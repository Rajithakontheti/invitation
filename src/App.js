import { Route, Switch } from "react-router-dom";

import When from "./components/When";
import Header from "./components/Header";
import Home from "./components/Home";
import Where from "./components/Where";

import "./App.css";

const App = () => (
  <div className="invitation-cont">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/when" component={When} />
      <Route exact path="/where" component={Where} />
    </Switch>
  </div>
);
export default App;
