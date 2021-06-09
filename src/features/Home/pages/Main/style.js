import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5rem 10rem;
  background-color: hsl(0, 0%, 96%);
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GridContainer = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem 8rem;
`;

export const CustomLinkCountry = styled.div`
  /* Orther */
  transition: all 0.25s linear;

  & * {
    /* Text */
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
