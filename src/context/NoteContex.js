import { useReducer } from "react";
import { createContext } from "react";
import { getInitialData } from "../utils";
import { ADD_NOTES, ARCHIVE_NOTE } from "./action.type";

export const NoteContext = createContext(null);

const initialState = {
  notes: getInitialData(),
  archives: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTES:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case ARCHIVE_NOTE:
      const newArchive = state.notes.filter(
        (note) => note.id == action.payload
      )[0];
      console.log("new archive: ", newArchive);
      return {
        ...state,
        notes: state.notes.filter((note) => note.id != action.payload),
        archives: [...state.archives, newArchive],
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
