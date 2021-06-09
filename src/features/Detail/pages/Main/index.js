import React from "react";
import { Container, FlexRow, BackButton } from "./style";
import { FaBackward } from "react-icons/fa";
import CountryDetail from "features/Detail/components/CountryDetail";
import { useHistory } from "react-router-dom";

function Main(props) {
  const history = useHistory();
  const { country } = props;

  return (
    <Container>
      <FlexRow>
        <BackButton onClick={history.goBack}>
          <FaBackward />
          Back
        </BackButton>
      </FlexRow>

      <CountryDetail country={country} />
    </Container>
  );
}

export default Main;
