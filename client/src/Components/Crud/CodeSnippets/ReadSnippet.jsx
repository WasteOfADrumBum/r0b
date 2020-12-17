import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../../assets/styles/CodeSnippets.scss";

const ReadSnippet = () => {
  return (
    <>
      <Row className="text-left mb-2">
        <Col md={6}>
          <ul>
            <li>
              <b>Read:</b> The read function is similar to a search function. It
              allows users to search and retrieve specific records in the table
              and read their values. Users may be able to find desired records
              using keywords, or by filtering the data based on customized
              criteria. For example, a database of items might enables users to
              view the all them items in the list.
            </li>
          </ul>
        </Col>
        <Col md={6} style={{ borderLeft: ".2rem solid black" }}>
          <div className="code-box">
            <code>
              todoRoutes.route("<var>/</var>").get(function (req, res) &#123;
              <br />
              &#8195;Todo.find(function (err, todos) &#123;
              <br />
              &#8195;&#8195;if (err) &#123;
              <br />
              &#8195;&#8195;&#8195;console.log(err);
              <br />
              &#8195;&#8195;&#125; else &#123;
              <br />
              &#8195;&#8195;&#8195;res.json(todos);
              <br />
              &#8195;&#8195;&#125;
              <br />
              &#8195;&#125;);
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

export default ReadSnippet;
