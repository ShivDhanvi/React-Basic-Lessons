import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FullStory() {
  // we can fetch url passing id using this useParams hook
  const { id } = useParams();

  const [getPost, setPost] = useState([]);

  //   instead of making the same API call, what best we can do?? ??

  // Axios code will go here
  useEffect(() => {
    // Axios GET requests will be made here
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log("GET Response:", response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {/* can implement back button to go to main posts page */}
      <h5>Post Id: {getPost?.id}</h5>
      <h1>Title: {getPost?.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quos
        necessitatibus commodi quis facere itaque! Animi libero vitae sint
        suscipit minima eos adipisci repellendus magni, cupiditate quisquam
        delectus! Delectus ducimus fugit assumenda, nostrum tempore, at
        voluptate excepturi sunt, dolore alias qui voluptatum! Error porro eos
        qui aliquid dolor dolorem delectus.
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, architecto
        dignissimos, esse, fuga saepe ducimus beatae quaerat autem velit at
        perspiciatis? Consequatur animi voluptas, repellat in at quam. Molestiae
        quae, enim impedit voluptate eveniet ut doloribus sunt nam dolores!
        Quibusdam ea laborum enim officiis architecto molestias iure dicta
        similique veritatis. Qui exercitationem nam dicta debitis beatae
        deleniti impedit? Illo laudantium esse aspernatur similique autem hic
        eaque odio! Iste doloremque quas minima, soluta, repellendus quidem
        maiores aperiam harum velit ut nesciunt ipsa debitis libero optio.
        Dignissimos consequuntur fuga porro eius eveniet!
      </p>
      {/* can dynamically change based on the id ?? ?? */}
      <img
        src="../../images/image.png"
        width={250}
        height={250}
        loading={"lazy"}
        alt="funny image"
      />
    </>
  );
}

export default FullStory;
