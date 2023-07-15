import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';

const RegisterScreen = () => {
  
    return (
        <FormContainer>
            <h1>Sign Up</h1>

            <Form onSubmit={''}>
                <Form.Group controlId='first_name' className='my-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter first name'
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                    ></Form.Control>    
                </Form.Group>

                <Form.Group controlId='last_name' className='my-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter last name'
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

                <Form.Group controlId='phone' className='my-3'>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter phone number'
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
                       <Link to='/login' className='login-link'> Login </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};
export default RegisterScreen;