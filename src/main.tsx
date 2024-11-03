import { createRoot } from "react-dom/client";
import { MyApp } from "./app/my-app.component";

function main() {
  const rootElm = document.getElementById("root");

  if (!rootElm) {
    throw new Error("Root element not found");
  }
  createRoot(rootElm).render(<MyApp />);
}

main();
