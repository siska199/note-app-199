import React from "react";
import { useState } from "react";
import {
  ModalContainer,
  AddNoteContainer,
  FormContainer,
  Button,
} from "./addNote.style";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContex";
import { ADD_NOTES } from "../context/action.type";
import { showFormattedDate } from "../utils";

const AddNote = ({ setModal }) => {
  const { dispatch } = useContext(NoteContext);
  const initialForm = {
    title: "",
    createdAt: "",
    fill: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    const formData = {
      ...form,
      id: uuidv4(),
      archived: false,
    };
    dispatch({ type: ADD_NOTES, payload: formData });
    handleCloseModal();
  };

  const handleCloseModal = () => {
    const html = document.querySelector("html");
    html.classList.remove("overflow-y-hidden");
    setModal(false);
  };

  return (
    <ModalContainer onClick={(e) => handleCloseModal(e)}>
      <AddNoteContainer onClick={(e) => e.stopPropagation()}>
        <h1>Add New Note</h1>
        <FormContainer>
          <input
            value={form.title}
            onChange={(e) => handleOnChange(e)}
            type="text"
            name="title"
            placeholder="Note Title"
          />
          <input
            onChange={(e) => handleOnChange(e)}
            value={form.date}
            type="date"
            name="createdAt"
          />
          <textarea
            name="fill"
            placeholder="Note Fill"
            cols="30"
            rows="5"
            value={form.fill}
            onChange={(e) => handleOnChange(e)}
          ></textarea>
          <Button
            onClick={() => handleSubmit()}
            disabled={form.title && form.createdAt && form.fill ? false : true}
          >
            Add Note
          </Button>
        </FormContainer>
      </AddNoteContainer>
    </ModalContainer>
  );
};

export default AddNote;
