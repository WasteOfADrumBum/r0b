import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./Create/create-todo.component";
import EditTodo from "./Update/edit-todo.component";
import TodosList from "./Read/todos-list.component";
import DeleteTodo from "./Delete/delete-todo.component.js";
import CodeSnippets from "./CodeSnippets/CodeSnippets.jsx";
import { Row, Col, Image, Button } from "react-bootstrap";
import { FiRefreshCw } from "react-icons/fi";

class Crud extends Component {
  render() {
    return (
      <Router>
        <h2 className="section3 mb-4">
          Let's Checkout This MERN-Stack CRUD Example
        </h2>
        <p>
          CRUD is an acronym that comes from the world of computer programming
          and refers to the four functions that are considered necessary to
          implement a persistent storage application: create, read, update and
          delete. Persistent storage refers to any data storage device that
          retains power after the device is powered off, such as a hard disk or
          a solid-state drive. In contrast, random access memory and internal
          caching are two examples of volatile memory - they contain data that
          will be erased when they lose power.
        </p>
        <i >© Sumo Logic</i>
        <Row className="mt-5">
          <Col md={6} className="m-auto">
            <Image src="/assets/images/crud.png" fluid />
          </Col>
          <Col md={6} className="m-auto">
            <p>
              This CRUD example's data base is being hosted by MongoDB. Try out
              the demo below and see how easy it is to <i>create</i> a new task,
              <i>read</i> your to-do list as well as <i>update</i> and
              <i>delete</i> tasks.
            </p>
            <p>
              If the list is slow to update you can always click the
              <Button disabled style={{ color: "#70b5de" }} variant="light" size="sm">
                <FiRefreshCw />
              </Button>
              button to refresh the component. React is a single page web application
              so we always avoid refreshing the entire page. However, using
              <code style={{ color: "#70b5de" }}> this.setState() </code>
              method, we’re able to refresh a component only.
            </p>
          </Col>
        </Row>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-4">
          <Link to="/" className="navbar-brand">
            To-Do List Options:
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Item
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Read List
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/delete/:id" component={DeleteTodo} />
        <CodeSnippets />
      </Router>
    );
  }
}
export default Crud;
