import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/globals.css";
import { ToastProvider } from "./context/ToastContext";
import { ThemeProvider } from "./components/Terminal/ThemeContext";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ToastProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ToastProvider>
  </React.StrictMode>
);
