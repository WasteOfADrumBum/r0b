let mongoose = require("mongoose");
let db = require("../models");

const URI = process.env.MONGODB_URI || "mongodb://localhost/todos";
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => console.log(err)
);


let seedData = [
  {
    todo_description: "Example Description #1",
    todo_responsible: "John Doe",
    todo_priority: "Low",
  },
  {
    todo_description: "Example Description #2",
    todo_responsible: "John Doe",
    todo_priority: "Medium",
  },
  {
    todo_description: "Example Description #3",
    todo_responsible: "Jane Doe",
    todo_priority: "High",
  },
];

db.Todo
  .deleteMany({})
  .then(() => db.Todo.collection.insertMany(seedData))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
