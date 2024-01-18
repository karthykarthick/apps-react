import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        onChange={(e) => {
          const title = e.target.value;
          console.log(title);
          setTitle(title);
        }}
      />{" "}
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          const desc = e.target.value;
          setDescription(desc);
        }}
      />{" "}
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ title: title, description: description }),
          }).then(async function (res) {
            const result = await res.json();
            alert("Todo added");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
