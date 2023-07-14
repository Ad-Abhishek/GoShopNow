import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from './FormContainer';

const LoginScreen = () => {
    return (
        <FormContainer>
        
            <h1>Sign In</h1>

            <Form onSubmit={''}>
                <Form.Group controlId='email' className='my-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='password' className='my-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                    ></Form.Control>    
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-2'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer? 
                    <a href='/'>Register</a>
                    {/* <Link to='/register'>Register</Link> */}
                </Col>
            </Row>
        </FormContainer>
    );
};
export default LoginScreen;