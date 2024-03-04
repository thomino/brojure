import { BrowserRouter, ScrollRestoration } from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes";


function App() {
  return (
    <>
    <BrowserRouter basename={"/"}>
      <AnimatedRoutes />
    </BrowserRouter>

    </>
  );
}

export default App;