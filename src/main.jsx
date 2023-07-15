import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "../src/styles/index.css";

// Remove ReactDOM.render and use createRoot instead
createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
