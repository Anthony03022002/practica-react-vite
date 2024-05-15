import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextoTareasProvider } from "./context/ContextoTareas.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextoTareasProvider>
      <App />
    </ContextoTareasProvider>
  </React.StrictMode>
);
