import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-hot-toast';

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

    const [ val, setVal ] = useState(0); 

    const serverUrl = `http://127.0.0.1:8000/api/product/product/${productId}/`;
    const add_to_cart_URL =`http://127.0.0.1:8000/api/cart/cart/`; 
    let origin = 'http://127.0.0.1:8000';
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

    const addToCartHandler = async () => {
        const token = localStorage.getItem('jwt');
        
        const headers = {
            'Authorization' : `Bearer ${token}`
        }

        const body = {
            p_id : productId,
            quantity: val
        }

        if(token && (body.quantity < 1 )){
            toast.error("Min 1 qty required");
        }
        if ( token &&  (body.quantity >= 1 )) {
                axios
                    .post(add_to_cart_URL, 
                        body
                    , {headers})
                    .then((res) => {
                        toast.success("Product added to cart successfully")
                        navigate('/cart')
                    })
                    .catch((err) => {
                        toast.error(err.response.data.error);
                    })
        }
        if (!token){
            toast.error("Redirected to Login!");
            navigate('/login');
        }
    }

    const updateQuantity = (e) => {
        setVal( () => {
            return e.target.value   
        })    
    }
  return (
    <>
        {/* {Object.keys(product).length > 0 && JSON.stringify(product.image_url[0].image_url)} */}

            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
                <Row>
                <Col md={3}>
                    
                    <Image fluid
                        src={(Object.keys(product).length > 0) ? `${origin}/${product.image_url[0].image_url}`:``}
                    />
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
                                        <strong>{product.stock > 0 ? `In Stock - [${product.stock}]` : 'Out Of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                value={ val }
                                                as='input'
                                                placeholder={product.stock}
                                                onChange={(e) => updateQuantity(e)}
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