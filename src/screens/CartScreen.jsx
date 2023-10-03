import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Row, 
    Col,
    ListGroup,
    Image,
    Form,
    Button,
    Card,
} from 'react-bootstrap';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';

const CartScreen = () => {

    const [ cartItems, setCartItems ] = useState([]);

    const get_user_cart_URL = `http://127.0.0.1:8000/api/cart/cart/`;

    const token = localStorage.getItem('jwt');

    const headers = {
        'Authorization' : `Bearer ${token}`
    }

    useEffect(() => {
        axios
          .get(get_user_cart_URL, { headers }) 
          .then((res) => {
            setCartItems(() => {
              return res.data.results;
            });
          }) 
          .catch((err) => {
            console.log(err);
          }); 
    }, [get_user_cart_URL]);

    const navigate = useNavigate();

    const checkoutHandler = () => {
        if (token) {
            navigate('/shipping');
        } 
        if (!token) {
            navigate('/login');
        }
    }

    return (
        <Row>   
            <Col md={7}>
                <Link className='btn btn-light my-3' to='/'>
                    Go Back
                </Link>
                <h1 style={{marginBottom: '20px' }}>Shopping Cart</h1>
                
                { cartItems.length === 0 ? (
                    <Message>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message> 
                ) : (
                    <ListGroup variant='flush'>
                        <Row>
                            <Col md={2}>
                                Image
                            </Col>

                            <Col md={3}>
                                Product Id / Name
                            </Col>

                            <Col md={2}>
                                Quantity
                            </Col>

                            <Col md={2}>
                            </Col>
                        </Row>
                        { cartItems.map((item) => (
                            <ListGroup.Item key={item.p_id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src='https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=400' alt=' item.name ' fluid rounded />
                                    </Col>

                                    <Col md={3}>
                                        <Link to='/product/{item.p_id}'>{item.p_id}</Link>
                                    </Col>

                                    <Col md={2}>
                                        {item.quantity} 
                                    </Col>

                                    <Col md={2}>
                                        <Form.Control
                                            as='select'
                                        >
                                            <option >1</option>
                                            <option >2</option>
                                            <option >3</option>
                                        </Form.Control>
                                    </Col>
                                    <Col md={2}>
                                        <Button type='button' variant='light' onClick={''}>
                                            <FaTrash />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>    
                    )
                }
            </Col>    
            
            <Col md={1}></Col>
            
            <Col md={4}>
                <Card style={{ width: "24rem", margin: "20px", top: "40px" }} className='my-3 p-3 rounded'>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                Subtotal 
                                ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) items
                            </h2>

                            {/* ${ cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)} */}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button 
                                type='button'
                                className='btn-block'
                                disabled={ cartItems.length === 0}
                                onClick={ checkoutHandler }
                            >
                                Proceed to Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}
export default CartScreen
