import "./styles.css";
import DisplayName from "./DisplayName";
import { useState } from "react";
import SessionOne from "./SessionOne";
import DynamicAPI from "./DynamicAPI";
import DisplayUserList from "./DisplayUserList";
import AxiosSession from "./AxiosSession";
import StoryBook from "./StoryBook";

export default function App() {
  // assigning variables
  // let name = "Rajini";
  // functional hooks => useState cuming from react library
  const [name, setName] = useState("click get my name button to set my name");
  const [count, setCount] = useState(0);
  let age = "70";

  // es5 function
  function firstLetter() {
    let nameSplitter = name.split("");
    return nameSplitter[0];
  }

  // es6 function
  const firstLetterArrowFn = () => {
    let nameSplitter = name.split("");
    console.log("nameSplitter", nameSplitter[1]);
    return nameSplitter[0];
  };

  // es6
  const updateCount = () => {
    // prev => will have the previous count state
    // setCount((prev) => prev + 1);
    setCount(count + 1);
  };

  return (
    <>
      {/* passing local state as props */}
      <DisplayName name={name} age={age} />

      {/* setting local state on click */}
      <button onClick={() => setName("Rajini")}>Get my name</button>
      <hr />
      <h3>Count: {count}</h3>
      <button onClick={updateCount}>Add Count</button>
    </>
  );
}
