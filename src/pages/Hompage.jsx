import React, { useEffect, useState, useContext } from "react";
import { BsPlusCircle } from "react-icons/bs";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import AddNote from "../components/AddNote";
import {
  ContainerCards,
  WrapContainerCards,
  ButtonAddNote,
} from "./homepage.style";
import { NoteContext } from "../context/NoteContex";
import { MenuContext } from "../context/MenuContext";

const Hompage = () => {
  const { activeMenu } = useContext(MenuContext);
  const {
    state: { notes, archives },
  } = useContext(NoteContext);

  const [modal, setModal] = useState(false);
  const [data, setData] = useState(activeMenu == "notes" ? notes : archives);

  useEffect(() => {
    setData(activeMenu == "notes" ? notes : archives);
  }, [notes, archives, activeMenu]);

  const handleOnChange = (e) => {
    const filter = e.target.value;
    const filterRegex = new RegExp(filter, "ig");
    setData((prev) => {
      const data =
        activeMenu == "notes"
          ? notes.filter((note) => note.title.match(filterRegex))
          : archives.filter((archive) => archive.title.match(filterRegex));
      return data;
    });
  };
  const handleOpenModal = () => {
    const html = document.querySelector("html");
    html.classList.add("overflow-y-hidden");
    setModal(true);
  };

  return (
    <article className="container">
      <Navbar handleOnChange={handleOnChange} />
      <WrapContainerCards>
        <ContainerCards>
          {data
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((data, i) => (
              <Card key={i} i={i + 1} data={data} />
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
