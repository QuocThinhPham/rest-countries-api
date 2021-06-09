import React, { useState } from "react";
import {
  FilterWrapper,
  FilterButton,
  DropdownMenu,
  DropdownItem,
  DropdownLink,
} from "./style";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Filter() {
  const [visible, setVisible] = useState(false);
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const location = useLocation();

  const renderDropdownMenu = (list, location) => {
    const { pathname } = location;
    // const param = new URLSearchParams(search).get("search");

    return list.map((item, index) => {
      return (
        <DropdownItem key={index}>
          <DropdownLink href={`${pathname}?filter=${item}`}>
            {item}
          </DropdownLink>
        </DropdownItem>
      );
    });
  };

  return (
    <FilterWrapper>
      <FilterButton onClick={() => setVisible(!visible)}>
        Filter by Region
        <FaChevronDown />
      </FilterButton>
      <DropdownMenu visible={visible}>
        {renderDropdownMenu(regions, location)}
      </DropdownMenu>
    </FilterWrapper>
  );
}

export default Filter;
