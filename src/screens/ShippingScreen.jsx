import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { CheckoutSteps } from "../components/CheckoutSteps";

export const ShippingScreen = () => {
    
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/payment');
    };

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />

            <h1>Shipping</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group controlId="address" className="my-2">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter address"
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="city" className="my-2">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter city"
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="postalCode" className="my-2">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter postal code"
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="country" className="my-2">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter country"
                    ></Form.Control>
                </Form.Group>
                
                <Button
                    type="submit"
                    variant="primary"
                    className="my-2"
                >
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen;