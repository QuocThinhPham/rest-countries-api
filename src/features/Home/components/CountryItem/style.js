import styled from "styled-components";

export const CountryItemWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 1rem;
  background-color: hsl(0, 0%, 96%);
  box-shadow: 2px -2px 5px hsl(0, 0%, 95%), -2px 2px 5px hsl(0, 0%, 80%);
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
`;

export const FlagImage = styled.img`
  display: block;
  width: 100%;
  height: 17rem;
`;

export const CountryDetails = styled.div`
  padding: 1.6rem 2rem;
`;

export const CountryName = styled.h4`
  font-size: 1.5rem;
  letter-spacing: 0.07rem;
  word-spacing: 0.2rem;
  margin-bottom: 1.6rem;
  color: hsl(200, 15%, 8%);
`;

export const CountryText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0;
  letter-spacing: 0.05rem;
  word-spacing: 0.4rem;
  color: hsl(0, 0%, 52%);
`;

export const CountrySpan = styled.span`
  color: hsl(200, 15%, 8%);
  font-weight: bold;
`;
