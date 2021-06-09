import Header from "components/Header";
import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("./features/Home"));
const Detail = React.lazy(() => import("./features/Detail"));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        {/* Header Top */}
        <Header />

        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route path="/home" component={Home} />
          <Route path="/details" component={Detail} />

          {/* Not Found */}
          {/* <Route component={CountryItem} /> */}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
