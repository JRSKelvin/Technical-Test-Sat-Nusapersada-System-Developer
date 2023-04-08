import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProfileAvatarComponent = () => {
  return (
    <React.Fragment>
      <Card className="mb-4">
        <Card.Body className="text-center">
          <Card.Img
            src="https://kelvin-personal-portfolio-2.vercel.app/assets/images/user_icon.png"
            alt="avatar"
            className="rounded-circle"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <Card.Title>Front End Developer</Card.Title>
          <Card.Text>Indonesia</Card.Text>
          <div className="d-flex justify-content-center mb-2">
            <Button href="mailto:yeskelvin1@gmail.com" variant="primary">
              Email
            </Button>
            <Button
              href="https://kelvin-personal-portfolio-2.vercel.app/"
              className="ms-1"
              variant="outline-primary"
            >
              Portfolio
            </Button>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default ProfileAvatarComponent
