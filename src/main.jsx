import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/styles/index.sass";

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
