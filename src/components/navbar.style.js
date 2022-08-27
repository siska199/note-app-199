import styled from "styled-components";

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  background-color: #f7ecde;
  z-index: 1;
`;
export const TitleWebsite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
  font-family: "Signatra";
  color: black;
`;
export const FilterSearch = styled.section`
  background-color: #e4e4e7;
  border-radius: 3rem;
  display: flex;
  column-gap: 0.5rem;
  padding: 0.5rem 1rem;
  height: 3rem;
  input {
    width: 15rem;
    font-size: 0.9rem;
    outline: none;
    border: none;
    background-color: #e4e4e7;
  }
  input::placeholder {
    color: #71717a;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  ul {
    display: flex;
    gap: 1rem;
  }
`;

export const Li = styled.li`
  color: black;
  font-weight: 600;
  color: purple;
  cursor: pointer;
  position: relative;
  &:after {
    display: ${props=>props.active?"block":"none"};
    position: absolute;
    content: "";
    height: 3px;
    bottom: -7px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: purple;
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
`;
