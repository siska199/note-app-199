import React from "react";
import { showFormattedDate } from "../utils";
import {
  CardContainer,
  CardHeader,
  CardBody,
  ContainerOptionsCard,
} from "./card.style";
import { cardColor } from "../utils/styleVariables";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContex";
import { ADD_ARCHIVE, DELETE_NOTE } from "../context/action.type";
import { MenuContext } from "../context/MenuContext";

const Card = ({ data, i }) => {
  const { dispatch } = useContext(NoteContext);
  const date = showFormattedDate(data.createdAt);
  const { activeMenu } = useContext(MenuContext);
  const modRes = i % 5;
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

  const handleArchive = () => {
    dispatch({
      type: ADD_ARCHIVE,
      payload: data.id,
    });
  };
  const handleDelete = () => {
    dispatch({
      type: DELETE_NOTE,
      payload: data.id,
    });
    
  };
  return (
    <CardContainer color={color}>
      <CardHeader>
        <h1>{data.title}</h1>
        <BiDotsHorizontalRounded
          className="dot-icon"
          size={"1.5rem"}
          style={{ cursor: "pointer" }}
        />
        <ContainerOptionsCard>
          <ul>
            {activeMenu == "notes" && (
              <li onClick={() => handleArchive()}>Archive</li>
            )}
            <li onClick={() => handleDelete()}>Delete</li>
          </ul>
        </ContainerOptionsCard>
      </CardHeader>
      <p>{date}</p>
      <CardBody>
        <p>{data.body}</p>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
