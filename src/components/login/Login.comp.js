import React from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap'
export const LoginForm = ({HandleChange,email,password}) => {
  return (
    <Container>
       <Row>
         <Col>
           <h1 className="text-info text-center">Client Login</h1>
           <hr/>
           <Form>
             <Form.Group>
               <Form.Label>Email</Form.Label>
               <Form.Control onChange={HandleChange} type="email" name="email" value={email} placeholder="Enter Email" required />
             </Form.Group>
             <Form.Group>
               <Form.Label>Password</Form.Label>
               <Form.Control onChange={HandleChange}  type="password" name="password" value= {password} placeholder="password" required />
             </Form.Group>
             <Button type="submit">Login</Button>
           </Form>
           <hr/>
         </Col>
       </Row>
       <Row>
         <Col>
          <a href="#!">Forget Password!</a>
         </Col>
       </Row>
    </Container>
  )
}

