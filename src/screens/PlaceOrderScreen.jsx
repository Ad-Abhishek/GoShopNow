import { Link } from 'react-router-dom';
import { Card, Button, Row, Col, ListGroup, Image} from 'react-bootstrap';
import CheckoutSteps from "../components/CheckoutSteps";
import Message from '../components/Message';

const PlaceOrderScreen = () => {

  return (
    <>
        <CheckoutSteps step1 step2 step3 step4 />
        <Row>
            <Col md={8}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        <p>
                            <strong>Address:</strong>
                            pool, Pokhara{' '}
                            1716,{' '}
                            Nepal
                        </p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Payment Mehod</h2>
                        <strong>Method: </strong>
                        Khalti
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {/* {cart.cartItems.length === 0 ? ( */}
                            <Message>Your cart is empty</Message>
                        {/* ) : ( */}
                            <ListGroup variant="flush">
                                {/* { cart.cartItems.map((item, index) => ( */}
                                    <ListGroup.Item key='1'>
                                        <Row>
                                            <Col md={1}>
                                                <Image
                                                    src='https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=400'
                                                    alt='item.name'
                                                    fluid
                                                    rounded
                                                />    
                                            </Col>

                                            <Col>
                                                <Link to={`/product/2`}>
                                                    item.name
                                                </Link>
                                            </Col>

                                            <Col md={4}>
                                                1 * 45 = 45
                                                {/* { item.qty } x ${ item.price } = ${ item.qty * item.price } */}
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                {/* ))} */}
                            </ListGroup>
                        {/* )} */}
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Order Summary</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                               <Col>Items:</Col>
                               <Col>cart.itemsPrice</Col> 
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                               <Col>Shipping:</Col>
                               <Col>cart.shippingPrice</Col> 
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                               <Col>Tax:</Col>
                               <Col>cart.taxPrice</Col> 
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                               <Col>Total:</Col>
                               <Col>cart.totalPrice</Col> 
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {/* {error && <Message variant='danger'>{error}</Message>} */}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button
                                type="button"
                                className="btn-block"
                                // disabled={cart.cartItems.length === 0}
                                // onClick={ placeOrderHandler }
                            >
                                Place Order
                            </Button>  
                            {/* { isLoading && <Loader />}   */}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </>
  )
}

export default PlaceOrderScreen