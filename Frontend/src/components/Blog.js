/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import {Container , Row , Col , Image} from 'react-bootstrap';
import './Blog.css';
import blogs from '../blogs.json';
// import fav from '../../components/images/Myproject.png'
export default function Blog() {

    const [content , setContent] = useState(blogs);

  return (
    <div>

    <Container>
        <Row>
            

            <Col md={9}>
            {
                content.map((con)=>{
                    return (
                        
                
                <Row className="mb-5">
                    <Col md={4}>
                        <Image src={con.image} rounded fluid ></Image>
                        
                    </Col>

                    <Col md={8}>
                    <h2 className="mb-4 ">{con.title}</h2>
                    <p className="mt-3 para">{con.description}</p>

                    <div>
                        <h6 className="font-weight-bold mb-5 " style={{color:'rgb(43, 209, 227)'}}>Read More &gt;</h6>
                    </div>

                    </Col>
                </Row>

            

                    )
                })
            }

</Col>
            
            <Col md={3} className='bb'>

                
                <div>
                <h2 className="mb-4">Popular Articles</h2>
                </div>

                <Row className="mb-4">
                    <Col md={3}>
                    <Image src="https://media.istockphoto.com/id/1395304859/photo/businessmen-protecting-personal-data-on-laptop-and-virtual-interfaces.jpg?s=2048x2048&w=is&k=20&c=Dtx0WdS7dyje6PfcSBeAR6NsBC0CVaoHf8_nHHI1B8E=" roundedCircle fluid ></Image>
                    </Col>

                    <Col md={9}>
                        <p>Even the all-powerful Pointing has no control</p>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={3}>
                    <Image src="https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.jpg?s=1024x1024&w=is&k=20&c=Bck-z2Z287uKcEDpoLS7F1VA9NzdBbF7gY0ZTyYPoTs=" roundedCircle fluid ></Image>
                    </Col>

                    <Col md={9}>
                        <p>Even the all-powerful Pointing has no control</p>
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col md={3}>
                    <Image src="https://media.istockphoto.com/id/1395304859/photo/businessmen-protecting-personal-data-on-laptop-and-virtual-interfaces.jpg?s=2048x2048&w=is&k=20&c=Dtx0WdS7dyje6PfcSBeAR6NsBC0CVaoHf8_nHHI1B8E=" roundedCircle fluid ></Image>
                    </Col>

                    <Col md={9}>
                        <p>Even the all-powerful Pointing has no control</p>
                    </Col>
                </Row>

            </Col>
        </Row>
    </Container>

    </div>
  )
}
