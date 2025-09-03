import { useEffect, useState } from "react";
import DisplayUserList from "./DisplayUserList";

export default function DynamicAPI() {
  // useState for storing API response data
  const [data, setData] = useState([]);
  // useState for maintaining button state
  const [isCheckout, setIsCheckout] = useState(false);

  // single time => onMount life cycle
  useEffect(() => {
    // aynsc, await
    const fetchData = async () => {
      try {
        // in return => we will get as promises (resolve, reject)
        const response = await fetch(
          "https://mp153f681bc51c895196.free.beeceptor.com/data"
        );
        const result = await response.json();
        console.log("result from API", result);
        // updating the state => with API response data
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    // calling function
    fetchData();
  }, []);

  console.log("coming from API:", data);

  return (
    <>
      <h1>userName: {data.userName}</h1>
      <p>
        User is {data.userAge} years old, he/ she is living in {data.userRegion}
        .
      </p>
      {/* conditional rendering */}
      {isCheckout ? <DisplayUserList /> : null}
      <button onClick={() => setIsCheckout(true)}>Checkout All Users</button>
    </>
  );
}
