import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";

const Todo = (props) => (
  <tr>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td>
      <Link to={"/edit/" + props.todo._id}>
        <Button size="sm" variant="info">
          Update
        </Button>
      </Link>
      &#8195;
      <Link to={"/delete/" + props.todo._id}>
        <Button size="sm" variant="danger">
          Delete
        </Button>
      </Link>
    </td>
  </tr>
);

export default class TodosList extends Component {
  refresh = () => {
    // re-renders the component
    this.setState({});
  };

  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch(function (error) {
        console.log("componentDidMount axios catch error", error);
      });
  }

  todoList() {
    return this.state.todos.map(function (currentTodo, i) {
      return <Todo todo={currentTodo} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3>
          ToDo List{" "}
          <Button
            onClick={this.refresh}
            style={{ color: "#70b5de" }}
            variant="light"
            size="sm"
          >
            <FiRefreshCw />
          </Button>
        </h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
