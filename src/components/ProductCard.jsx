import { Card } from 'react-bootstrap';

const CardTest = ({ name, email, website, zip }) => {
  return (
    <div>
    <Card style={{ width: "18rem", margin: "20px" }} className='my-3 p-3 rounded'>
      <Card.Img
        variant="top"
        src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=400"
      />
    
      <Card.Body>
        <Card.Title>
          {/* {props.email} {props.psw} */}
          <h4>{name}</h4>
        </Card.Title>
        <Card.Text>
          <p>{email}</p>
        </Card.Text>
        <Card.Text>
          <p>{website}</p>
        </Card.Text>
        <Card.Text>
          <p>{zip}</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
  </div>
  )
}

export default CardTest;