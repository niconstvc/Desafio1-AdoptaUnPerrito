import Card from 'react-bootstrap/Card';
import Tags from './Tags';


const Cardog = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} style={{ width: '10rem', height: '10rem' }} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Tags colorBadge={props.colorBadge} textBadge={props.textBadge} />
        </Card.Body>
      </Card>
    )
  }
  
  export default Cardog