import React from 'react'
import { Card } from 'react-bootstrap'

const ProfileDescriptionComponent = () => {
  return (
    <React.Fragment>
      <Card className="mb-4">
        <Card.Body>
          <Card.Text>Hello, my name is Kelvin.</Card.Text>
          <Card.Text>
            I'm an active student who is currently a final year college student at UIB (Universitas
            Internasional Batam), majoring in Information Systems Computer Science. I am highly
            interested in Technology, Programming, and Software Engineering. Previously, I have
            developed several Websites using HTML, CSS, Javascript, and PHP, Simple Games using C#,
            and Android Mobile Applications using Kotlin. In addition, through my journeys, I also
            learned new things such as Javascript using the ReactJS Framework, Back-End using
            ExpressJS, and the Kotlin programming language.
          </Card.Text>
          <Card.Text>
            For experience, I have participated in several activities and internships such as
            Independent Study at Binar Academy as an Android Developer, Independent Study at Glints
            Academy as Front-End, and Web Developer at Kartika Motor.
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default ProfileDescriptionComponent
