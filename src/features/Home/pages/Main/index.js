import React from "react";
import { Container, FlexRow, GridContainer, CustomLinkCountry } from "./style";
import Search from "features/Home/components/Search";
import Filter from "features/Home/components/Filter";
import { NavLink } from "react-router-dom";
import CountryItem from "features/Home/components/CountryItem";

const CustomLink = ({ country, to, activeOnlyWhenExact }) => {
  return (
    <CustomLinkCountry>
      <NavLink exact={activeOnlyWhenExact} to={to}>
        <CountryItem country={country} />
      </NavLink>
    </CustomLinkCountry>
  );
};

function Main(props) {
  const { countries } = props;

  const renderCountryItem = (list) => {
    return list.map((item) => {
      const { alpha3Code } = item;
      const path = `/details/${alpha3Code}`;

      return (
        <CustomLink
          key={alpha3Code}
          country={item}
          to={path}
          activeOnlyWhenExact={true}
        />
      );
    });
  };

  const passProps = (value) => {
    props.passProps(value);
  };

  return (
    <Container>
      {/* Control Box */}
      <FlexRow>
        <Search passProps={passProps} />
        <Filter />
      </FlexRow>

      {/* All Country */}
      <GridContainer>{renderCountryItem(countries)}</GridContainer>
    </Container>
  );
}

export default Main;
