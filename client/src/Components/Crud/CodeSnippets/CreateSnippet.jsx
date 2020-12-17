import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../assets/styles/CodeSnippets.scss";

const CreateSnippet = () => {
  return (
    <>
      <Row className="text-left mb-2">
        <Col md={6}>
          <ul>
            <li>
              <b>Create:</b> The create function allows users to create a new
              record in the database. In the SQL relational database
              application, the Create function is called INSERT. In Oracle HCM
              Cloud, it is called create. Remember that a record is a row and
              that columns are termed attributes. A user can create a new row
              and populate it with data that corresponds to each attribute, but
              only an administrator might be able to add new attributes to the
              table itself.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              todoRoutes.route("<var>/add</var>").post(function (req, res) &#123;
              <br />
              &#8195; let todo = new Todo(req.body);
              <br />
              &#8195; todo
              <br />
              &#8195; &#8195; .save()
              <br />
              &#8195; &#8195; .then((todo) =&#62; &#123;
              <br />
              &#8195; &#8195; &#8195; res.status(200).json(&#123; todo: "todo
              added successfully" &#125;);
              <br />
              &#8195; &#8195; &#125;)
              <br />
              &#8195; &#8195; .catch((err) =&#62; &#123;
              <br />
              &#8195; &#8195; &#8195; res.status(400).send("adding new todo
              failed");
              <br />
              &#8195; &#8195; &#125;);
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

export default CreateSnippet;
