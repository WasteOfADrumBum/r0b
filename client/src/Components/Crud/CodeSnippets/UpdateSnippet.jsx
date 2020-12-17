import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../assets/styles/CodeSnippets.scss";

const UpdateSnippet = () => {
  return (
    <>
      <Row className="text-left mb-2">
        <Col md={6}>
          <ul>
            <li>
              <b>Update:</b> The update function is used to modify existing
              records that exist in the database. To fully change a record,
              users may have to modify information in multiple fields. As a
              result, the existing record in the database must be changed and
              all of the attribute values changed to reflect the characteristics
              of the new dish.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              todoRoutes.route("<var>/update/:id</var>").post(function (req, res) &#123;
              <br />
              &#8195;Todo.findById(req.params.id, function (err, todo) &#123;
              <br />
              &#8195; &#8195;if (!todo) res.status(404).send("data is not
              found");
              <br />
              &#8195; &#8195;else todo.todo_description =
              req.body.todo_description;
              <br />
              &#8195; &#8195;todo.todo_responsible = req.body.todo_responsible;
              <br />
              &#8195; &#8195;todo.todo_priority = req.body.todo_priority;
              <br />
              &#8195; &#8195;todo.todo_completed = req.body.todo_completed;
              <br />
              <br />
              &#8195;todo
              <br />
              &#8195; &#8195;.save()
              <br />
              &#8195; &#8195;.then((todo) =&#62; &#123;
              <br />
              &#8195; &#8195; &#8195;res.json("Todo updated!");
              <br />
              &#8195; &#8195;&#125;)
              <br />
              &#8195; &#8195;.catch((err) =&#62; &#123;
              <br />
              &#8195; &#8195; &#8195;res.status(400).send("Update not
              possible");
              <br />
              &#8195; &#8195;&#125;);
              <br />
              &#8195;&#125;);
              <br />
              &#125;);
            </code>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default UpdateSnippet;
