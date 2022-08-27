import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./index.style"
import NoteContextProvider from "./context/NoteContex";

const root = createRoot(document.getElementById("root"));
root.render
(
    <NoteContextProvider>
        <App />
    </NoteContextProvider>
);
