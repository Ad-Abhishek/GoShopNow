import { useParams, Link } from "react-router-dom";
import {
    Form,
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    ListGroupItem 
} from 'react-bootstrap';
import Rating from "../components/Rating";
import {products} from "../products";


const ProductScreen = () => {
    const { id: productId } = useParams();
    const product = products.find((p) => (p.p_id).toString() === productId);


  return (
    <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            
            {/* { isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger' >
                    { error?.data?.message || error.error }
                </Message>
            ) : ( */}
                <Row>
                <Col md={3}>
                    <Image src='https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=400' alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} test={`${product.numReviews} reviews`} />
                        </ListGroupItem>
                        <ListGroup.Item as='h5'>Price: Rs. {product.price}</ListGroup.Item>
                        <ListGroup.Item>Category: {product.category}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>Rs. {product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                            <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        <strong>{1 > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {/* {product.countInStock > 0 && ( */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as='input'
                                                placeholder="0"
                                            >
                                                           
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            {/* )} */}

                            <ListGroup.Item>
                                <Button
                                    className="btn-block"
                                    type="button"
                                    // disabled={product.countInStock === 0}
                                    // onClick={addToCartHandler}
                                >
                                    Add To Cart
                                </Button>    
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            {/* ) }    */}
        </>
  )
}

export default ProductScreen