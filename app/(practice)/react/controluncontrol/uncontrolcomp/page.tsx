"use client";

import { useRef } from "react";

export default function UnControlComp() {
  const inputref = useRef(null);

  const handleSubmit = () => {
    let inpVal = inputref.current?.value;
    console.log(inpVal, "inpVal");
  };

  return (
    <>
      <p>Uncontrolled Components (DOM is the boss)</p>
      <p>
        A component is uncontrolled when the DOM manages the input state, not
        React.
      </p>
      <p>Uses ref No value in JSX React reads value only when needed</p>

      <input ref={inputref} placeholder="Enter Name" />
      <button onClick={handleSubmit}>Submit</button>
      <p>User types → DOM stores value → React reads via ref</p>
    </>
  );
}
