import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
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

const ProductScreen = () => {
    const { id: productId } = useParams();
    const serverUrl = `https://goshopnow.onrender.com/api/product/product/${productId}/`;
    const [product, setProduct] = useState({});

    useEffect(() => {
      axios
        .get(serverUrl) 
        .then((res) => {
          setProduct(() => {
            return res.data;
          });
        }) 
        .catch((err) => {
          console.log(err);
        }); 
    }, [serverUrl]);
    const navigate = useNavigate();

    const addToCartHandler = () => {
        if (localStorage.getItem('jwt')) {
            navigate('/cart');
        } else {
            navigate('/login');
        }
    }
  return (
    <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
                <Row>
                <Col md={3}>
                    <Image src='https://dovecomputers.co.ke/wp-content/uploads/2022/03/samsung-galaxy-a23-blue-1.jpg' alt={product.name} fluid />
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
                        <ListGroup.Item>Description: {product.description} </ListGroup.Item>
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
                                        <strong>{product.stock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as='input'
                                                placeholder={product.stock}
                                            >                       
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    className="btn-block"
                                    type="button"
                                    disabled={product.stock === 0}
                                    onClick={addToCartHandler}
                                >
                                    Add To Cart
                                </Button>    
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
  )
}

export default ProductScreen