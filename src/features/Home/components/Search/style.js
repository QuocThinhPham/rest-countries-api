import styled from "styled-components";

export const SearchBar = styled.form`
  position: relative;
  width: 40rem;
  height: 4.5rem;
  border-radius: 0.2rem;
  overflow: hidden;
  box-shadow: 2px -2px 5px hsl(0, 0%, 95%), -2px 2px 5px hsl(0, 0%, 80%);
`;

export const IconSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 4.5rem;
  height: 4.5rem;
  font-size: 1.8rem;
  color: hsl(0, 0%, 52%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 2rem 0 5rem;
  font-size: 1.4rem;
  color: hsl(0, 0%, 52%);
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.2rem;
  border: none;
  outline: none;

  &::placeholder {
    color: hsl(0, 0%, 52%);
    font-size: 1.4rem;
  }
`;
