import { Row, Col, Button } from 'react-bootstrap';
const DatesAction = ( onviewAll, onDaletall ) => {
  return (
    <Row className="justify-content-center m-2">
      <Col sm="8" className='d-flex justify-content-between '>
        <Button onClick={onDaletall}> مسح البيانات </Button>
        <Button onClick={onviewAll} >عرض البيانات </Button>
      </Col>
    </Row>
  )
}
export default DatesAction