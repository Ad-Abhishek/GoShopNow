import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {
  

    return (
        <FormContainer>
            <h1>Sign Up</h1>

            <Form onSubmit={''}>
                <Form.Group controlId='name' className='my-3'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter name'
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='email' className='my-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='password' className='my-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='confirmPassword' className='my-3'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        // value={confirmPassword}
                        // onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>    
                </Form.Group>

                <Button
                    type='submit'
                    variant='primary'
                    className='mt-2'
                >
                    Register
                </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Already have an account? 
                       <a href='/'> Login </a>
                </Col>
            </Row>
        </FormContainer>
    );
};
export default RegisterScreen;