import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../assets/styles/CodeSnippets.scss";

const DeleteSnippet = () => {
  return (
    <>
      <Row className="text-left mb-2">
        <Col md={6}>
          <ul>
            <li>
              <b>Delete:</b> The delete function allows users to remove records
              from a database that is no longer needed. The delete function
              allows users to delete one or more records from the database. Some
              relational database applications may permit users to perform
              either a hard delete or a soft delete. A hard delete permanently
              removes records from the database, while a soft delete might
              simply update the status of a row to indicate that it has been
              deleted while leaving the data present and intact.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              todoRoutes.route("<var>/delete/:id</var>").delete((req, res)
              =&#62; &#123;
              <br />
              &#8195; Todo.findByIdAndRemove(req.params.id, (err, todo) =&#62;
              &#123;
              <br />
              &#8195; &#8195; if (!todo) &#123;
              <br />
              &#8195; &#8195; &#8195; res.status(404).send("data is not found");
              <br />
              &#8195; &#8195; &#125; else &#123;
              <br />
              &#8195; &#8195; &#8195; res.status(200).json(&#123;
              <br />
              &#8195; &#8195; &#8195; &#8195; msg: todo,
              <br />
              &#8195; &#8195; &#8195; &#125;);
              <br />
              &#8195; &#8195; &#125;
              <br />
              &#8195; &#125;);
              <br />
              &#125;);
              <br />
            </code>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DeleteSnippet;
