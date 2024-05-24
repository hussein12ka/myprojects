import {  Row, Col } from 'react-bootstrap';
import { person } from '../../../public/link';
const DatesCount = () => {
  return (
    <Row >
    <Col sm="8" className='m-3'>
      لديك {person.length} مواعيد
    </Col>
  </Row>
  )
}
export default DatesCount