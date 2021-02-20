import React, { useState } from "react";
import Input from "./Input";
function Ask() {
  const [vers, setvers] = useState([]);

  function addresults(verses) {
    setvers(verses);
    console.log(verses);
    console.log("The verses are");
    console.log(vers);
  }

  return (
    <div id="first-solid-bar">
      <Input addresult={addresults} />

      <div id="result"></div>
    </div>
  );
}

export default Ask;
