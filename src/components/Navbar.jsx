import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import {
  Nav,
  FilterSearch,
  TitleWebsite,
  LeftContainer,
  Li,
} from "./navbar.style";

const Navbar = ({ handleOnChange }) => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);

  return (
    <Nav>
      <TitleWebsite>
        <h1>Me Note</h1>
      </TitleWebsite>
      <LeftContainer>
        <ul>
          <Li
            onClick={() => setActiveMenu("notes")}
            active={activeMenu == "notes" ? true : false}
          >
            Notes &#127848;
          </Li>
          <Li
            onClick={() => setActiveMenu("archives")}
            active={activeMenu == "archives" ? true : false}
          >
            Archives &#127846;
          </Li>
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
