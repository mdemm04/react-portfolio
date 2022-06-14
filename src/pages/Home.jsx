import React from 'react'
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'

const profilepic = "https://images.pexels.com/photos/12118291/pexels-photo-12118291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

export const Home = () => {
  return (
    <div className='home-body mt-5'>
      <Container>
        <Row className='home-main-row'>
          <Col>
            <Card className='p-5'>
              <Image src={profilepic} width={300} height={300} className="rounded mx-auto d-block" roundedCircle />
              <Card.Title>
                <h1>TEST</h1>
              </Card.Title>
              <Card.Subtitle className='md-2 text-muted'>
                <h2>Full-Stack Developer</h2>
              </Card.Subtitle>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo perferendis libero vel nobis dolorem iure corporis numquam laboriosam inventore ullam quaerat voluptatibus minus reprehenderit, corrupti nesciunt unde odit cumque ipsam laborum natus. Animi dolores placeat voluptatum! Quam itaque fugiat eum officiis atque? Veritatis, optio unde! Architecto voluptatibus eaque deleniti.
                </p>
              </Card.Text>
              <Card.Link href="/about">
                <Button variant='primary'>About</Button>
              </Card.Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}