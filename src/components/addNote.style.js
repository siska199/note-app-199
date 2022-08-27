import styled from "styled-components";

export const ModalContainer = styled.section`
    position: fixed;
    background-color: rgba(0,0,0,0.7);
    top:0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    z-index: 2;
`

export const AddNoteContainer = styled.div`
    margin: auto;
    background-color: #F7ECDE;
    width: 30rem;
    padding: 3rem 5rem;
    display: flex;
    flex-direction: column;
    gap:1rem;
    h1{
        text-align: center;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:1rem;
    input, textarea{
        outline: none;
        padding: 0.3rem 0.5rem;
        border: none;
        border-bottom: 1px solid gray;
        background-color: #F7ECDE;
        
    }
    label{
        margin-left: auto;
        font-size: 0.7rem;
    }
`

export const Button = styled.button`
    padding: 0.5rem;
    border : none;
    background-color: black;
    cursor: pointer;
    color: white;
    border-radius: 5px;

    &:disabled{
        cursor: default;
        background-color : #363333;
    }
`