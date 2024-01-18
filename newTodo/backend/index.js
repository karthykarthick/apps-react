const express = require("express");
const app = express();
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

app.use(express.json());
app.use(cors());

app.get("/todos", async function (req, res) {
  const todos = await todo.find();
  res.json({
    todos,
  });
});

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you send wrong inputs",
    });
    return;
  }

  // put in mogodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "todo created successfully",
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "you send wrong inputs",
    });
    return;
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "todo update successfully",
  });
});

app.listen(3000);
