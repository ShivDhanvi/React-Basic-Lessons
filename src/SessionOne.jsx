import "./SessionOneStyle.css";
import { useEffect, useState } from "react";

export default function SessionOne() {
  // useState
  const [checkMethod, setCheckMethod] = useState("");
  // useEffect => life cycle methods => onMount, onUpdate, onUnmount
  useEffect(
    () => {
      // 90% => API call
      setCheckMethod("on Mount!");
    },
    [] // deps or dependency);
  );

  //   onUpdate => onMount function + everytime when state changes will trigger
  useEffect(() => {
    console.log("on update!", checkMethod);
  }, [checkMethod]);

  //   onUnmount => when page dies or leaves
  useEffect(() => {
    // clearing stuffs
    return () => setCheckMethod("");
  }, []);

  return (
    <>
      <h1>Hello from Session One, {checkMethod}</h1>
      <button
        className="checkBtn"
        onClick={() => setCheckMethod("inject data!")}
      >
        Check
      </button>
    </>
  );
}
