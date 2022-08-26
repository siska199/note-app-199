import styled from "styled-components";


export const Nav = styled.nav`
    position: sticky;
    top: 0;
    padding: 1rem 0rem;
    display : flex;
    justify-content: space-between;
    background-color: #F7ECDE;
    z-index: 9999;
`
export const TitleWebsite = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: white;
    font-family: 'Signatra';
    color:black;
`
export const FilterSearch = styled.section`
    background-color:#e4e4e7;
    border-radius: 3rem;
    display: flex;
    column-gap: 0.5rem;
    padding: 0.5rem 1rem;
    height: 3rem;
    input {
        width : 15rem;
        font-size: 0.9rem;
        outline: none;
        border: none;
        background-color:#e4e4e7;
    }
    input::placeholder{
        color:#71717a;
    }

`