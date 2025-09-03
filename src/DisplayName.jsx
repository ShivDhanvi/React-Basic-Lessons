import SessionOne from "./SessionOne";

export default function DisplayName({ name, age }) {
  return (
    <>
      <h1>Hello, {name}</h1>
      <h3>{age}</h3>
      {/* <h1>First Letter: {firstLetter()}</h1> */}
      {/* <h1>First Letter: {firstLetterArrowFn()}</h1> */}
      <SessionOne />
    </>
  );
}
