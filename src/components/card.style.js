import styled from "styled-components";

export const CardContainer = styled.section`
  color: #27272a;
  width: 18rem;
  min-height: 15rem;
  background-color: ${(props) => props.color};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.7rem;
  position: relative;
  p {
    font-size: 0.7rem;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 1rem;
  }
`;
export const CardBody = styled.div`
  font-size: 0.8rem;
  text-align: justify;
`;


export const ContainerOptionsCard = styled.section`
    position: absolute;
    width: 7rem;
    right:1rem;
    top: 2rem;
    font-size: 0.7rem;
    background-color: white;
    display: none;
    div{
        padding: 0.5rem;
        border-bottom: 0.005rem solid #94a3b8;
        cursor: pointer;
        &:hover{
            background-color: #cbd5e1;
        }
    }

    .dot-icon:hover + &, &:hover{
        display: block;
    }
`