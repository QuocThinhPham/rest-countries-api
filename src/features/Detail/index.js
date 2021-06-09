import countryApi from "api/countryApi";
import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import Main from "./pages/Main";

function Detail() {
  const match = useRouteMatch();
  const location = useLocation();
  const urlParts = location.pathname.split("/");
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchSimpleCountry = async () => {
      try {
        const response = await countryApi.getByAlphaCode(urlParts[2]);

        setCountry(response);
      } catch (error) {
        console.log("Failed to fetch country list: ", error);
      }
    };

    fetchSimpleCountry();
  }, []);

  return (
    <Switch>
      <Route exact path={`${match.url}/:countryCode`}>
        <Main country={country} />
      </Route>
    </Switch>
  );
}

export default Detail;
