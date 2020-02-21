import React from "react";

import Header from "../../Components/Header";
import Car from "../Car";

function App() {
  return (
    <>
      {/* Include Error boundary later */}
      <Header title={"Coding challenge"} />
      <Car />
    </>
  );
}

export default App;
