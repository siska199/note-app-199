import React from 'react'
import { Nav, FilterSearch,TitleWebsite } from './navbar.style'

const Navbar = () => {
  return (
    <Nav>
        <TitleWebsite>
            <h1>
                Me Note 📜
            </h1>
        </TitleWebsite>
        <FilterSearch>
            <input placeholder='search note title...' type="text" name="" id="" />
            <box-icon name='dots-horizontal-rounded'></box-icon>
        </FilterSearch>
    </Nav>
  )
}

export default Navbar