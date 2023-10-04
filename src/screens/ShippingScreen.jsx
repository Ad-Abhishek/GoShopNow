import { useState } from 'react';
import axios from "axios";
import { Form, Button, FormGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { CheckoutSteps } from "../components/CheckoutSteps";

export const ShippingScreen = () => {
    
    const [ userAddress, setUserAddress ] = useState([]);
    const [ addresses, setAddresses ] = useState([]);

    const get_previous_address_URL = 'http://127.0.0.1:8000/api/address/delivery-address/';

    const navigate = useNavigate();

    let cityName = '';
    let provinceName = '';
    let areaName = '';

    const getPreviousAddress = () => {
        const token = localStorage.getItem('jwt');

        const headers = {
            'Authorization' : `Bearer ${token}`
        }

        axios 
            .get(get_previous_address_URL, 
                {headers})
            .then((res) => {
                setUserAddress(() => {                
                    cityName = res.data[0].city;
                    provinceName = res.data[0].provience;
                    areaName = res.data[0].area;
                    addresses.push(provinceName, cityName, areaName)
            }); 
            })
            .catch((err) => {
                console.log(err);
            });  
    }

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/payment');
    };

    return (
        <>  
        <FormContainer>
            <CheckoutSteps step1 step2 />

            <h1>Shipping</h1>
                <Form  >
                    <Form.Group controlId="province" className="my-2" >
                        <Form.Label>Province</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter province"
                            value={addresses[0]}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="city" className="my-2">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter city"
                            value={addresses[1]}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="area" className="my-2">
                        <Form.Label>Area</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter area"
                            value={addresses[2]}
                        ></Form.Control>
                    </Form.Group>

                    <FormGroup>
                        <Form.Label onClick={getPreviousAddress}>
                           click to get previous address
                        </Form.Label>
                    </FormGroup>
                    
                    <Button
                        type="submit"
                        variant="primary"
                        className="my-2"
                        onClick={submitHandler}
                    >
                        Continue
                    </Button>
                </Form>  
        </FormContainer>
    </>
    )
}

export default ShippingScreen;