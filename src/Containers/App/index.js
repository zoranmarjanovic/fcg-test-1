import React from "react";

import Header from "../../Components/Header";
import Car from "../Car";

function App() {
  return (
    <>
      {/* Include Error boundary later */}
      <Header title={"FCG coding challenge"} />
      <Car />
    </>
  );
}

export default App;
