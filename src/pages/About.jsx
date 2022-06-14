import React from 'react'
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

const profilepic = "https://images.pexels.com/photos/12118291/pexels-photo-12118291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const js = "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-javascript-is-a-high-level-interpreted-programming-language-logo-color-tal-revivo.png"
const reactjs = "https://img.icons8.com/color/48/000000/react-native.png"
const python = "https://img.icons8.com/fluency/48/000000/python.png"
const nodejs = "https://img.icons8.com/color/48/000000/nodejs.png"

export const About = () => {

  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <div className='home-body mt-5'>
      <Container>
        <Row className='home-main-row'>
          <Col>
            <Card className='p-5'>
              <Image src={profilepic} width={300} height={300} className="rounded mx-auto d-block" roundedCircle />
              <Card.Title>
                <h1>Full-Stack Developer</h1>
              </Card.Title>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat nihil quisquam, modi nobis, quibusdam beatae quaerat sequi asperiores minima, odit sit aut delectus. Eligendi alias esse corporis voluptatem et neque sed perspiciatis omnis, autem a sapiente voluptatum aliquid facilis commodi atque voluptate, sit tenetur sunt aspernatur vel doloribus facere possimus illum! Voluptatibus repellat, earum voluptatum culpa eos totam iusto dolorum sequi expedita placeat doloremque magnam? Esse deleniti incidunt impedit voluptatem! Consectetur, veritatis. Vero eveniet sequi dolores esse provident sint earum, harum ipsam in ex blanditiis, nobis facilis quasi rerum eos totam. Accusamus, id sapiente. Ullam iste dolore officiis impedit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, fugiat aliquam at dolor reiciendis mollitia quia exercitationem! Nemo, facere incidunt quam quos dicta eveniet, vitae maxime aut odio quod eaque corporis! Quisquam sapiente molestias, excepturi odit atque facere totam, id eaque repudiandae est perspiciatis unde repellendus incidunt eos amet laborum!
                </p>
                <h3>My Skills</h3>
                <ul className='myskills justify-content-center'>
                  <li><Image src={js} /></li>
                  <li><Image src={reactjs} /></li>
                  <li><Image src={python} /></li>
                  <li><Image src={nodejs} /></li>
                </ul>
                <div className='back-next-button'>
                  <Button onClick={handleBack} variant='dark'>
                    Back
                  </Button>
                </div>
                <br />
                <br />
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}