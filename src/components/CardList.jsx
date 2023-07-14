import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const CardList = ({ product }) => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
      {product.map(item => (
        <Col sm={12} md={6} lg={5} xl={3}>
          <ProductCard key={item.id} name={item.name} email={item.email} website={item.website} zip={item.address.zipcode}/>
        </Col>
      ))}
      </Row>
    </div>
  );
};

export default CardList;