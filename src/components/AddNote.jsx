import React from "react";
import {
  ModalContainer,
  AddNoteContainer,
  FormContainer,
  Button,
} from "./addNote.style";

const AddNote = ({ setModal }) => {
  const handleCloseModal = () => {
    const html = document.querySelector("html");
    console.log("html: ", html)
    html.classList.remove("overflow-y-hidden")
    setModal(false);
  };
  return (
    <ModalContainer onClick={(e) => handleCloseModal(e)}>
      <AddNoteContainer onClick={(e) => e.stopPropagation()}>
        <h1>Add New Note</h1>
        <FormContainer>
          <input type="text" placeholder="Judul Catatan" />
          <input type="date" />
          <textarea
            placeholder="Isi Catatan"
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <Button disabled={true}>Add Note</Button>
        </FormContainer>
      </AddNoteContainer>
    </ModalContainer>
  );
};

export default AddNote;
