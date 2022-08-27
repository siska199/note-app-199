import React from "react";
import {
  Nav,
  FilterSearch,
  TitleWebsite,
  LeftContainer,
  Li,
} from "./navbar.style";

const Navbar = ({ handleOnChange }) => {
  const active = "notes";
  return (
    <Nav>
      <TitleWebsite>
        <h1>Me Note</h1>
      </TitleWebsite>
      <LeftContainer>
        <ul>
          <Li active={active == "notes" ? true : false}>Notes &#127848;</Li>
          <Li active={active == "arsips" ? true : false}>Archives &#127846;</Li>
        </ul>
        <FilterSearch>
          <input
            onChange={(e) => handleOnChange(e)}
            placeholder="search note title..."
            type="text"
            name=""
            id=""
          />
        </FilterSearch>
      </LeftContainer>
    </Nav>
  );
};

export default Navbar;
