import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { fetchCountryList } from "redux/actions/countryActions";
import Main from "./pages/Main";

function Home() {
    const match = useRouteMatch();
    // const location = useLocation;
    // const [countries, setCountries] = useState([]);
    const [keyword, setKeyword] = useState("");
    const countries = useSelector((state) => state.country.list);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountryList());
    }, [dispatch]);

    // useEffect(() => {
    //   const fetchAsyncCountryList = async () => {
    //     try {
    //       const response = await countryApi.getAll();
    //       setCountries(response);
    //     } catch (error) {
    //       console.log("Failed to fetch country list: ", error);
    //     }
    //   };

    //   fetchAsyncCountryList();
    // }, [keyword]);

    const passProps = (value) => {
        setKeyword(value);
    };

    return (
        <Switch>
            <Route exact path={match.url}>
                <Main countries={countries} passProps={passProps} />
            </Route>
        </Switch>
    );
}

export default Home;
