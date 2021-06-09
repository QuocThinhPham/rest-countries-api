import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: hsl(0, 0%, 100%);
  height: 8rem;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
`;

export const HeaderLeft = styled.div``;

export const Brand = styled.h3`
  color: hsl(200, 15%, 8%);
  font-size: 2rem;
  word-spacing: 0.2rem;
  letter-spacing: 0.1rem;
`;

export const HeaderRight = styled.div``;

export const ThemeButton = styled.button`
  color: hsl(200, 15%, 8%);
  font-size: 1.6rem;
  font-weight: 300;
  padding: 1rem;
  background-color: transparent;
  outline: none;
  border: 1px solid hsl(0, 0%, 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.25s linear;
  position: relative;
  width: 12.7rem;

  &:hover {
    border-color: hsl(200, 15%, 8%);
  }
`;
