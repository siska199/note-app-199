import React from 'react'
import { showFormattedDate } from '../utils'
import { CardContainer, CardHeader, CardBody,ContainerOptionsCard } from './card.style'
import { cardColor } from '../utils/styleVariables'
import {BiDotsHorizontalRounded} from "react-icons/bi"

const Card = ({data}) => {
    const date = showFormattedDate(data.createdAt)
    const modRes = data.id % 5;
    let color;
    switch (modRes) {
      case 1:
        color = cardColor.c1;
        break;
      case 2:
        color = cardColor.c2;
        break;
      case 3:
        color = cardColor.c3;
        break;
      case 4:
        color = cardColor.c4;
        break;
      case 0:
        color = cardColor.c5;
        break;
      default:
        color = "pink";
        break;
    }
  return (
    <CardContainer color={color}>
        <CardHeader>
            <h1>
                {data.title}
            </h1>
              <BiDotsHorizontalRounded className="dot-icon" size={"1.5rem"} style={{cursor:"pointer"}}/>
              <ContainerOptionsCard>
                <div>
                    Arsipkan Catatan
                </div>
                <div>
                    Delete Catatan
                </div>
              </ContainerOptionsCard>
        </CardHeader>
        <p>{date}</p>
        <CardBody>
            <p>
                {data.body}
            </p>
        </CardBody>
    </CardContainer>
  )
}

export default Card