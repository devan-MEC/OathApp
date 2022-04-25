import { useState, useRef } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { ImageContainer } from "./components/ImageContainer";
import { exportComponentAsPNG } from "react-component-export-image";

function App() {
  const [val, setVal] = useState("");

  return (
    <div className=" font-mono  flex flex-col justify-center items-center  h-screen bg-gradient-to-b from-yellow-100">
      <p className="text-lg">SAY NO TO SUBSTANCE ABUSE!</p>
      <p className="text-xs">to claim your unique stamp</p>

      <div className="mt-8">
        <Form setVal={setVal} />
      </div>

      {/* <h1>{val}</h1> */}
      <div className="mt-8">
        <ImageContainer name={val} />
      </div>
    </div>
  );
}

export default App;
