import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({ item }) => {
  return (
    <div>
    <Card style={{ width: "18rem", margin: "20px" }} className='my-3 p-3 rounded'>
      <Link to={`/product/${item.p_id}`}>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=400"
        />
      </Link>  
    
      <Card.Body>
        <Link to={`/product/${item.p_id}`}  className='product-link'>
          <Card.Title as="div" className='product-title'>
            <strong>{item.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={ item.rating } />
        </Card.Text>
        <Card.Text>

        </Card.Text>
        <Card.Text as='h3'>
          Rs {item.price}
        </Card.Text>
        <Card.Text>
          <p>{item.category}</p>
        </Card.Text>
                
      </Card.Body>
    </Card>
  </div>
  )
}

export default ProductCard;