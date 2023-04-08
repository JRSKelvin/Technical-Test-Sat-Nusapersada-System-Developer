import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavbarComponent from '../src/components/navbar'
import ProfileAvatarComponent from '../src/components/profile-avatar'
import ProfileDescriptionComponent from '../src/components/profile-description'
import ProfileDetailComponent from '../src/components/profile-detail'
import ProfileSocialComponent from '../src/components/profile-social'
import TechnicalQuestionComponent from '../src/components/technical-question'

function IndexPage() {
  return (
    <React.Fragment>
      <section>
        <NavbarComponent />
        <Container className="py-5">
          <Row className="mb-4">
            <Col lg="4">
              <ProfileAvatarComponent />
              <ProfileSocialComponent />
            </Col>
            <Col lg="8">
              <ProfileDetailComponent />
              <ProfileDescriptionComponent />
            </Col>
          </Row>
          <Row>
            <Col>
              <TechnicalQuestionComponent />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default IndexPage
