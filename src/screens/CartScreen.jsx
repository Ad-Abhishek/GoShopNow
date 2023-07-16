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
import { FaTrash } from 'react-icons/fa';
import Message from '../components/Message';

const CartScreen = () => {
    const navigate = useNavigate();

    const checkoutHandler = () => {
        if (localStorage.getItem('jwt')) {
            navigate('/shipping');
        } else {
            navigate('/login');
        }
    }

    return (
        <Row>
            <Col md={8}>
                <h1 style={{marginBottom: '20px' }}>Shopping Cart</h1>
                {/* { cartItems.length === 0 ? ( */}
                    <Message>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                {/* ) : ( */}
                    <ListGroup variant='flush'>
                        {/* { cartItems.map((item) => ( */}
                            <ListGroup.Item key='1'>
                                <Row>
                                    <Col md={2}>
                                        <Image src='https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=400' alt=' item.name ' fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                        <Link to='/product/2'>item.name</Link>
                                    </Col>
                                    <Col md={2}>
                                        $ item.price 
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
                        {/* )) } */}
                    </ListGroup>
                {/* )} */}
            </Col>
            <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>
                            Subtotal
                            {/* Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items */}
                        </h2>

                        {/* ${ cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} */}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button 
                            type='button'
                            className='btn-block'
                            // disabled={ cartItems.length === 0}
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
