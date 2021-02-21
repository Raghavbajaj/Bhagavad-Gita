import React, { useState } from "react";
import "./App.css";
function Input(props) {
  const [input, setinput] = useState([]);
  const [verses, setverse] = useState([]);

  function handleSubmit(e) {
    let newobj = [""];

    const c = 5;
    const s = 6;
    e.preventDefault();
    fetch(`https://vedicscripturesapi.herokuapp.com/gita/${c}/${s}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const obj = [result.toString()];
        console.log(obj);
        newobj = obj.push(newobj);
      })
      .catch((err) => {
        console.error("Error: ", err);
      });

    setverse(newobj);
    console.log(newobj);
    props.addresult(newobj);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          value={input}
          type="text"
          onChange={(e) => setinput(e.target.value)}
          name="question"
          palceholder="Enter your Doubt..."
          autofocus
        />
      </form>
    </div>
  );
}

export default Input;
