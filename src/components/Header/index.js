import React from "react";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  Brand,
  ThemeButton,
} from "./style";
import { FaRegMoon } from "react-icons/fa";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Brand>Where in the world?</Brand>
      </HeaderLeft>
      <HeaderRight>
        <ThemeButton>
          <FaRegMoon />
          Dark Mode
        </ThemeButton>
      </HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;
