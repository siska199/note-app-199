import { useReducer } from "react";
import { createContext } from "react";
import { getInitialData } from "../utils";
import { ADD_NOTES } from "./action.type";

export const NoteContext = createContext(null);

const initialState = {
  notes: getInitialData(),
  arsip : []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTES:
      console.log("state: ", state);
      console.log("payload: ", action.payload);
      return { ...state, notes: [...state.notes, action.payload] };
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
