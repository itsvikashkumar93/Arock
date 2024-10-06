import React, { useState } from "react";
import Loading from "./components/Loading";
import Home from "./components/Home";
import Menu from "./components/Menu/Menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Loading />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default App;
