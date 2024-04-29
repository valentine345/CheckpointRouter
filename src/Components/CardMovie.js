import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CardMovie=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body>
          <Card.Title><Link to={`/Description/${el.name}`}>{el.name}</Link></Card.Title>
          <Card.Text>
            {el.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}

export default CardMovie