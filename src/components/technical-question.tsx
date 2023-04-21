import React from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import technicalCode from '../data/technical-question-code'

const TechnicalQuestionComponent = () => {
  return (
    <React.Fragment>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>IT Knowledge</Card.Title>
          <Card.Text style={{ fontWeight: "bold" }}>1. SQL Query Question</Card.Text>
          <Alert variant="danger">
            The information on this question is incomplete and lacks data or samples to attempt the query. So this question cannot be answered completely and appropriately.
          </Alert>
          <Alert variant="success">
            My analysis and answer to this question can be found in Extra Source Code.
          </Alert>
          <Card.Text>A. Provide a query to check how many total PO and CER from existing PR.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionFirstPartA}</code>
            </pre>
          </Container>
          <Card.Text>B. Provide a query to check if total items between PO and CER are tally.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionFirstPartB}</code>
            </pre>
          </Container>
          <Card.Text>C. Provide a query to check if item PO and CER are the same. (same sequence and product_id)</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionFirstPartC}</code>
            </pre>
          </Container>

          <Card.Text style={{ fontWeight: "bold" }}>2. Javascript Question</Card.Text>
          <Card.Text>A. What will the above code snippet output?</Card.Text>
          <Container className="border rounded-3 p-3 mb-4">
            <Card.Text>Comply with the code snippet without making any changes will cause error and show the output below.</Card.Text>
            <Row>
              <Col>
                <Container className="bg-light border rounded-3 p-3 h-100">
                  <pre>
                    <code>{technicalCode.blockCodeOneQuestionTwoPartA}</code>
                  </pre>
                </Container>
              </Col>
              <Col>
                <Container className="bg-light border rounded-3 p-3 h-100">
                  <pre>
                    <code>{technicalCode.outputCodeOneQuestionTwoPartA}</code>
                  </pre>
                </Container>
              </Col>
            </Row>
          </Container>
          <Card.Text>B. Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionTwoPartB}</code>
            </pre>
          </Container>
          <Card.Text>C. List out the different ways an HTML element can be accessed in a JavaScript code.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionTwoPartC}</code>
            </pre>
          </Container>

          <Card.Text style={{ fontWeight: "bold" }}>3. Programming Logic Question</Card.Text>
          <Card.Text>A. Write a method which will remove any given character from a String.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionThreePartA}</code>
            </pre>
          </Container>
          <Card.Text>B. Write code to check if a String is palindrome or not.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionThreePartB}</code>
            </pre>
          </Container>
          <Card.Text>C. Write a function to find the first non repeated character of a given String.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionThreePartC}</code>
            </pre>
          </Container>
          <Card.Text>D. Write a function to find the second highest number in an integer array.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionThreePartD}</code>
            </pre>
          </Container>

          <Card.Text style={{ fontWeight: "bold" }}>4. Object Oriented Programming Question</Card.Text>
          <Card.Text>A. Inherit Person objects support people with last name or with middle name such as: “James Bond”, “Robert Downey Junior”, “Zendaya Maree Stoermer Coleman”.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionFourPartA}</code>
            </pre>
          </Container>
          <Card.Text>B. Inherit GoFood object to add convenience fee for Rp.3,000 (fixed amount) if transport fee is lower than Rp.10,000.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneQuestionFourPartB}</code>
            </pre>
          </Container>

          <hr />
          <Card.Text style={{ fontWeight: "bold" }}>Extra Source Code</Card.Text>
          <Card.Text>1. All SQL query.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneExtraCodeFirst}</code>
            </pre>
          </Container>
          <Card.Text>2. Check for palindrome with allow one wrong letter.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneExtraCodeTwo}</code>
            </pre>
          </Container>
          <Card.Text>3. GoFood with recommended inherit class.</Card.Text>
          <Container className="bg-light border rounded-3 p-3 mb-4">
            <pre>
              <code>{technicalCode.blockCodeOneExtraCodeThree}</code>
            </pre>
          </Container>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default TechnicalQuestionComponent
