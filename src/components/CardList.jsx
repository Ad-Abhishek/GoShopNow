import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import ProductCard from './ProductCard';

const CardList = ({ product }) => {
  return (
    <div>
      <div style={{display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    height: '10vh'
                  }}
      >
        <Container className="mt-5">
          <Row>
            <Col sm={6}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 ms-5"
                  aria-label="Search"
                  align-items="center"
                />

              <Dropdown className="me-2">
                <Dropdown.Toggle id="price">
                  Price
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item >1=asc</Dropdown.Item>
                  <Dropdown.Item >0=default</Dropdown.Item>
                  <Dropdown.Item >-1=des</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="me-2">
                <Dropdown.Toggle id="rating">
                  Rating
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item >1=asc</Dropdown.Item>
                  <Dropdown.Item >0=default</Dropdown.Item>
                  <Dropdown.Item >-1=des</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
        
              <Button>
                <i class="bi bi-search"></i>
              </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>


      <h1>Latest Products</h1>
      <Row>
        {product.map(item => (
          <Col sm={12} md={6} lg={5} xl={3} key={item.p_id} >
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>

      <div style={{display: 'flex',
                   justifyContent:'center',
                   alignItems:'center',
                   height: '20vh'
                 }}
      >
        <Button className="pull-right me-2">
          <i class="bi bi-arrow-bar-left"></i>
        </Button>
        <Button className="pull-right me-2">
          <i class="bi bi-arrow-bar-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default CardList;