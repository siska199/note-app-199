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
import { useContext } from "react";
import { NoteContext } from "../context/NoteContex";

const Hompage = () => {
  const {
    state: { notes },
  } = useContext(NoteContext);
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => {
    const html = document.querySelector("html");
    html.classList.add("overflow-y-hidden");
    setModal(true);
  };
  
  return (
    <article className="container">
      <Navbar />
      <WrapContainerCards>
        <ContainerCards>
          {notes.map((data, i) => (
            <Card key={i} data={data} />
          ))}
        </ContainerCards>
      </WrapContainerCards>
      <ButtonAddNote onClick={() => handleOpenModal()}>
        <BsPlusCircle size="2rem" />
      </ButtonAddNote>
      {modal && <AddNote setModal={setModal} />}
    </article>
  );
};

export default Hompage;
