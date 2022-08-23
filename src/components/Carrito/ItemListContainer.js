
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import CloseButton from 'react-bootstrap/CloseButton';


function DefaultExample() {


  return (
    <Col md className='container mt-5 me-3'>
    <ListGroup as="ol" numbered >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Vodka Smirnoff</div>
          $ 2.000,00
        </div><CloseButton/>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Sheridans</div>
          $ 8.700,00
        </div>
        <CloseButton/>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Vodka Smirnoff</div>
          $ 2.000,00
        </div>
        <CloseButton/>
      </ListGroup.Item>
    </ListGroup></Col>
  );
}

export default DefaultExample;