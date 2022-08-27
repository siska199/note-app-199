import { useReducer } from "react";
import { createContext } from "react";
import { getInitialData } from "../utils";
import {
  ADD_NOTE,
  ADD_ARCHIVE,
  DELETE_NOTE,
  DELETE_ARCHIVE,
} from "./action.type";

export const NoteContext = createContext(null);

const initialState = {
  notes: getInitialData(),
  archives: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id != action.payload),
      };
    case ADD_ARCHIVE:
      const newArchive = state.notes.filter(
        (note) => note.id == action.payload
      )[0];
      return {
        ...state,
        notes: state.notes.filter((note) => note.id != action.payload),
        archives: [...state.archives, newArchive],
      };
    case DELETE_ARCHIVE:
      return {
        ...state,
        archives: state.archives.filter(
          (archive) => archive.id != action.payload
        ),
      };
  }
};

const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
