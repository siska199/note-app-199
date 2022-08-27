import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./index.style";
import NoteContextProvider from "./context/NoteContex";
import MenuContextProvider from "./context/MenuContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <MenuContextProvider>
    <NoteContextProvider>
      <App />
    </NoteContextProvider>
  </MenuContextProvider>
);
