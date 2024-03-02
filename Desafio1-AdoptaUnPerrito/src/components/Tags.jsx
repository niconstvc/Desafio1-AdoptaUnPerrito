import Badge from 'react-bootstrap/Badge';


const Tags = (props) => {
    return (
        <Badge bg={props.colorBadge}>{props.textBadge}</Badge>
    )
  }
  
  export default Tags