import styled from "styled-components";

export const WrapContainerCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem;
`

export const ContainerCards = styled.div`
    justify-content: center;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`

export const ButtonAddNote = styled.button`
    position: fixed;
    right:3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    bottom: 2rem;
    cursor: pointer;
    border-radius: 50%;
    border:none;
    color:pink;
    background-color: purple;
`