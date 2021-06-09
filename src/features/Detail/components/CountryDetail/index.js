import React from "react";
import { FlexContainer, FlagImage } from "./style";
import CountryInfo from "features/Detail/components/CountryInfo";

function CountryDetail(props) {
  const { country } = props;
  const { flag, name } = country;

  return (
    <FlexContainer mt={4}>
      <FlagImage src={flag} alt={name} />
      <CountryInfo country={country} />
    </FlexContainer>
  );
}

export default CountryDetail;
