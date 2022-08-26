import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import AddNote from "../components/AddNote";
import {
  ContainerCards,
  WrapContainerCards,
  ButtonAddNote,
} from "./homepage.style";
import { getInitialData } from "../utils";
import { useState } from "react";
const Hompage = () => {
  const [modal, setModal] = useState(false);
  const data = getInitialData();

  const handleOpenModal = () => {
    console.log("modal state: ", modal);
    const html = document.querySelector("html");
    console.log("html: ", html)
    html.classList.add("overflow-y-hidden")
    setModal(true);
  };
  return (
    <article className="container">
      <Navbar />
      <WrapContainerCards>
        <ContainerCards>
          {data.map((data, i) => (
            <Card key={i} data={data} />
          ))}
        </ContainerCards>
      </WrapContainerCards>
      <ButtonAddNote onClick={() => handleOpenModal()}>
        <BsPlusCircle size="2rem" />
      </ButtonAddNote>
      {modal && <AddNote setModal={setModal}/>}
    </article>
  );
};

export default Hompage;
