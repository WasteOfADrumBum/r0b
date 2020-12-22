// Express Setup
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
// MongoDB → Mongoose
const mongoose = require("mongoose");
const logger = require("morgan");
// Route Setup
const todoRoutes = express.Router();
const Todo = require("./models/todo.model");

// Morgan Logger
app.use(logger("dev"));

// Express data parsing
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static("public"));
// Production vs development build
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Database Connection
const URI = process.env.MONGODB_URI || "mongodb://localhost/todos";
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => console.log(err)
);
// Confirm Connection Success
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
todoRoutes.route("/").get((req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

todoRoutes.route("/:id").get((req, res) => {
  let id = req.params.id;
  Todo.findById(id, (err, todo) => {
    res.json(todo);
  });
});

todoRoutes.route("/update/:id").post((req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (!todo) {
      res.status(404).send("data is not found");
    } else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_priority;
      todo.todo_completed = req.body.todo_completed;

      todo
        .save()
        .then((todo) => {
          res.json("Todo updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
});

todoRoutes.route("/add").post((req, res) => {
  let todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new todo failed");
    });
});

todoRoutes.route("/delete/:id").delete((req, res) => {
  Todo.findByIdAndRemove(req.params.id, (err, todo) => {
    if (!todo) {
      res.status(404).send("data is not found");
    } else {
      res.status(200).json({
        msg: todo,
      });
    }
  });
});

app.use("/todos", todoRoutes);

// Server Port
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
  console.log(".env.PORT:" + process.env.PORT);
});
