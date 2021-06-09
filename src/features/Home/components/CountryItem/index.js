import React from "react";
import {
  CountryItemWrapper,
  FlagImage,
  CountryDetails,
  CountryName,
  CountryText,
  CountrySpan,
} from "./style";

const numberFormatter = (num) => {
  return new Intl.NumberFormat().format(num);
};

function CountryItem(props) {
  const { flag, name, population, region, capital } = props.country;

  return (
    <CountryItemWrapper>
      <FlagImage src={flag} alt={name} />
      <CountryDetails>
        <CountryName>{name}</CountryName>
        <CountryText>
          <CountrySpan>Population: </CountrySpan>
          {numberFormatter(population)}
        </CountryText>
        <CountryText>
          <CountrySpan>Region: </CountrySpan>
          {region}
        </CountryText>
        <CountryText>
          <CountrySpan>Capital: </CountrySpan>
          {capital}
        </CountryText>
      </CountryDetails>
    </CountryItemWrapper>
  );
}

export default CountryItem;
