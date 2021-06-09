import styled from "styled-components";

export const GridContainer = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin-top: ${(props) => props.mt || 0}rem;
`;

export const DetailInfo = styled.div`
  /* Display & Box Model */
  width: 65rem;
  max-width: 65rem;
`;

export const CountryName = styled.h3`
  /* Display & Box Model */
  margin-bottom: 2rem;

  /* Color */
  color: var(--color);

  /* Text */
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  word-spacing: 0.7rem;
`;

export const DetailText = styled.p`
  /* Display & Box Model */
  display: block;
  margin: 1rem 0;
  margin-top: ${(props) => props.mt || 1}rem;

  /* Color */
  color: hsl(0, 0%, 52%);

  /* Text */
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  word-spacing: 0.4rem;
`;

export const DetailSpan = styled.span`
  /* Color */
  color: hsl(200, 15%, 8%);

  /* Text */
  font-weight: bold;
`;

export const BorderSpan = styled.span`
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: inline-block;

  border-radius: 0.5rem;

  height: 100%;
  padding: 0.5rem 1rem;
  margin: 0 1rem;

  /* Color */
  color: hsl(200, 15%, 8%);
  background-color: hsl(0, 0%, 100%);
  box-shadow: 2px -2px 5px hsl(0, 0%, 92%), -2px 2px 5px hsl(0, 0%, 92%);

  /* Text */
  font-size: 1.3rem;
  font-weight: normal;
`;
