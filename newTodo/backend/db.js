const mongoose = require("mongoose");
// mongodb+srv://admin:admin@cluster0.7ge39rc.mongodb.net/

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.7ge39rc.mongodb.net/todos"
);
const schema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", schema);

module.exports = {
  todo,
};
