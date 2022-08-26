import styled from "styled-components";



export const CardContainer = styled.section`
    color: #27272a;
    width : 18rem;
    min-height: 15rem;
    background-color: ${props=>props.color};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.7rem;
`

export const CardHeader = styled.header`
    h1{
        font-size: 1rem;
    }
    p{
        font-size: 0.7rem;
    }
`
export const CardBody = styled.div`
    font-size: 0.8rem;
    text-align: justify;
`