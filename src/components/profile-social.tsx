import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const ProfileSocialComponent = () => {
  return (
    <React.Fragment>
      <Card className="mb-4">
        <Card.Body className="p-0">
          <ListGroup variant="flush" className="rounded-3">
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <FiMail />
              <Card.Text>yeskelvin1@gmail.com</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <FiLinkedin />
              <Card.Text>https://linkedin.com/in/kelvin2201</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <FiTwitter />
              <Card.Text>https://twitter.com/SLKelvin1</Card.Text>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
              <FiGithub />
              <Card.Text>https://github.com/JRSKelvin</Card.Text>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default ProfileSocialComponent
