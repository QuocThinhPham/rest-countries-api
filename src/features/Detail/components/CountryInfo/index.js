import React from "react";
import {
  GridContainer,
  DetailInfo,
  CountryName,
  DetailText,
  DetailSpan,
  BorderSpan,
} from "./style";

const numberFormatter = (num) => {
  return new Intl.NumberFormat().format(num);
};

function CountryInfo(props) {
  const { country } = props;

  const {
    name,
    nativeName,
    topLevelDomain,
    population,
    currencies,
    region,
    languages,
    subregion,
    capital,
    borders,
  } = country;

  const objectToArray = (obj) => {
    return Object.values({ ...obj });
  };

  const objectToString = (obj, type) => {
    const values = objectToArray(obj);
    let str = "";

    if (values.length > 0) {
      if (type === "TLD")
        for (let i = 0; i < values.length; i++) str += values[i] + ", ";
      else {
        for (let i = 0; i < values.length; i++) str += values[i].name + ", ";
      }
    }

    return str.substring(0, str.length - 2);
  };

  return (
    <DetailInfo>
      {/* Country Name */}
      <CountryName>{name}</CountryName>

      {/* Basic Information */}
      <GridContainer>
        <DetailText>
          <DetailSpan>Native Name: </DetailSpan>
          {nativeName}
        </DetailText>
        <DetailText>
          <DetailSpan>Top Level Domain: </DetailSpan>
          {objectToString(topLevelDomain)}
        </DetailText>
        <DetailText>
          <DetailSpan>Population: </DetailSpan>
          {numberFormatter(population)}
        </DetailText>
        <DetailText>
          <DetailSpan>Currencies: </DetailSpan>
          {objectToString(currencies)}
        </DetailText>
        <DetailText>
          <DetailSpan>Region: </DetailSpan>
          {region}
        </DetailText>
        <DetailText>
          <DetailSpan>Languages: </DetailSpan>
          {objectToString(languages)}
        </DetailText>
        <DetailText>
          <DetailSpan>Sub Region: </DetailSpan>
          {subregion}
        </DetailText>
        <DetailText></DetailText>
        <DetailText>
          <DetailSpan>Capital: </DetailSpan>
          {capital}
        </DetailText>
      </GridContainer>

      {/* Border Countries */}
      <DetailText mt={4}>
        <DetailSpan>Border Countries: </DetailSpan>
        {objectToArray(borders).map((border, index) => (
          <BorderSpan key={index}>{border}</BorderSpan>
        ))}
      </DetailText>
    </DetailInfo>
  );
}

export default CountryInfo;
