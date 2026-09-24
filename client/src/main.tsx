import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const redirectPath = new URLSearchParams(window.location.search).get("route");
if (redirectPath?.startsWith("/") && !redirectPath.startsWith("//")) {
  window.history.replaceState(null, "", redirectPath);
}

createRoot(document.getElementById("root")!).render(<App />);
