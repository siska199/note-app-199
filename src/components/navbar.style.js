import styled from "styled-components";


export const Nav = styled.nav`
    position: sticky;
    top: 0;
    padding: 1rem 0rem;
    display : flex;
    justify-content: space-between;
`
export const TitleWebsite = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: white;
`
export const FilterSearch = styled.section`
    background-color:#e4e4e7;
    border-radius: 3rem;
    display: flex;
    column-gap: 0.5rem;
    padding: 0.5rem 1rem;
    input {
        width : 15rem;
        height: 1.5rem;
        font-size: 0.8rem;
        outline: none;
        border: none;
        background-color:#e4e4e7;
    }
    input::placeholder{
        color:#71717a;
    }

`