import { Link } from "react-router-dom";

function RenderToDoList({ data }) {
  return (
    <>
      {data.map((todo) => (
        <div
          key={todo.id}
          style={{
            marginBottom: "20px",
            background: "#f0f0f0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h1>
            <strong>Id:</strong> {todo.id}
          </h1>
          <Link to={`/posts/${todo.id}`}>
            <h1>
              <strong>Title:</strong> {todo.title}
            </h1>
          </Link>
          <p>
            <strong>Body:</strong> {todo.body}
          </p>
          <p>
            <strong>User ID:</strong> {todo.userId}
          </p>
        </div>
      ))}
    </>
  );
}

export default RenderToDoList;
