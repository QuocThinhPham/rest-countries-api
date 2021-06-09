import styled from "styled-components";

export const FlexContainer = styled.div`
  /* Display & Box Model */
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: ${(props) => props.mt || 0}rem;
`;

export const FlagImage = styled.img`
  /* Display & Box Model */
  width: 60rem;
  ${"" /* height: 40rem; */}

  border: 0.1rem solid hsl(0, 0%, 90%);
`;
