import styled from "styled-components";

export const FilterWrapper = styled.div`
  width: 20rem;
  height: 4.5rem;
  margin-right: 2rem;
  border-radius: 0.2rem;
  background-color: hsl(0, 0%, 100%);
  z-index: 99;
`;

export const FilterButton = styled.button`
  color: hsl(200, 15%, 8%);
  font-size: 1.6rem;
  font-weight: 400;
  padding: 1rem 1.3rem;
  width: 100%;
  height: 100%;
  background-color: transparent;
  box-shadow: 2px -2px 5px hsl(0, 0%, 95%), -2px 2px 5px hsl(0, 0%, 80%);
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  cursor: pointer;
  transition: all 0.25s linear;
`;

export const DropdownMenu = styled.ul`
  margin-top: 0.5rem;
  list-style: none;
  width: 100%;
  height: auto;
  background-color: hsl(0, 0%, 100%);
  transform-origin: top;
  transform: rotateX(${(props) => (props.visible ? "0deg" : "90deg")});
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: all 0.3s ease;
`;

export const DropdownItem = styled.li`
  &:not(:first-child) {
    border-top: 1px solid hsl(0, 0%, 80%);
  }
`;

export const DropdownLink = styled.a`
  padding: 1rem 2.2rem;
  display: block;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: hsl(200, 15%, 8%);

  &:hover {
    background-color: hsl(0, 0%, 90%);
  }
`;
