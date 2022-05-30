import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleForm(event) {
    event.preventDefault();
  }

  function handleInput(event) {
    const { name, value } = event.target;
    setContact((prev) => {
      return {
        ...prev, // ES6 SPREAD OPERATOR SEE PREVIOS VERSION OF THIS CODE (https://github.com/GauravJain9/ChangeComplexStateReact) AND SEE HOW SHORT IT MADE IT BY USING SPREAD OPERATOR
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleForm}>
        <input
          onChange={handleInput}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleInput}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleInput}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
