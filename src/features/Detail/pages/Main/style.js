import styled from "styled-components";

export const Container = styled.div`
  /* Display & Box Model */
  border-top: 5px solid hsl(0, 0%, 96%);

  width: 100%;
  height: calc(100vh - 8rem);
  padding: 5rem 10rem;

  /* Color */
  background-color: hsl(0, 0%, 100%);
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1rem 1.3rem;
  width: 10rem;
  height: 100%;
  color: hsl(200, 15%, 8%);
  background-color: hsl(0, 0%, 100%);
  outline: none;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 2px -2px 5px hsl(0, 0%, 95%), -2px 2px 5px hsl(0, 0%, 80%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: all 0.25s linear;
  position: relative;
`;
