import { useEffect, useState } from "react";
import axios from "axios";

export default function DisplayUserList() {
  // to store the API data
  const [userList, setUserList] = useState();

  // to API call on onMount
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch(
          "https://68abf4607a0bbe92cbb8b928.mockapi.io/api/v1/users"
        );
        const data = await response.json();
        setUserList(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    // calling API with function name
    fetchUserList();
  }, []);

  // axois methods
  useEffect(() => {
    axios
      .get("https://68abf4607a0bbe92cbb8b928.mockapi.io/api/v1/users")
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>DisplayUserList</h1>
      <ul>
        {userList?.map((user) => (
          <li>
            {user?.name}, {user?.createdAt}
          </li>
        ))}
      </ul>
    </>
  );
}
