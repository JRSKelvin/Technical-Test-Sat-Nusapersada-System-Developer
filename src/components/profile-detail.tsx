import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const ProfileDetailComponent = () => {
  return (
    <React.Fragment>
      <Card className="mb-4">
        <Card.Body>
          <Row>
            <Col sm="3">
              <Card.Text>Full Name</Card.Text>
            </Col>
            <Col sm="9">
              <Card.Text className="text-muted">Kelvin</Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm="3">
              <Card.Text>Email</Card.Text>
            </Col>
            <Col sm="9">
              <Card.Text className="text-muted">yeskelvin1@gmail.com</Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm="3">
              <Card.Text>Mobile Phone</Card.Text>
            </Col>
            <Col sm="9">
              <Card.Text className="text-muted">(+62) 823-8686-3337</Card.Text>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col sm="3">
              <Card.Text>Address</Card.Text>
            </Col>
            <Col sm="9">
              <Card.Text className="text-muted">Kabupaten Karimun, Riau Island</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default ProfileDetailComponent
