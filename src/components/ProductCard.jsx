import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({ item }) => {
  return (
    <Card style={{ width: "18rem", margin: "20px" }} className='my-3 p-3 rounded'>
      <Link to={`/product/${item.p_id}`}>
        <Card.Img
          variant="top"
          src='https://dovecomputers.co.ke/wp-content/uploads/2022/03/samsung-galaxy-a23-blue-1.jpg'
        />
      </Link>  
    
      <Card.Body>
        <Link to={`/product/${ item.p_id }`}  className='product-link'>
          <Card.Title as="div" className='product-title'>
            <strong>{ item.name }</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={ item.rating } />
        </Card.Text>
        <Card.Text>

        </Card.Text>
        <Card.Text as='h3'>
          Rs { item.price }
        </Card.Text>
        <Card.Text>
          { item.category }
        </Card.Text>
                
      </Card.Body>
    </Card>
  
  )
}

export default ProductCard;