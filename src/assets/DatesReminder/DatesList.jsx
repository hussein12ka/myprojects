import { Row, Col } from 'react-bootstrap';
import person from '../data/DatesRe'
const DatesList = () => {
    return (
        <Row className="justify-content-center"  >
            <Col sm="8" >
                <div className="rectangel  "  >
                    {person.length ? (person.map((item) => {
                        return (
                            <div key={item.id} className='d-flex border my-2 align-items-center'>
                                <img src={item.img} alt={name} style={{ width: "100px" }}></img>
                                <div className='mx-4 ' >
                                    <p className='d-inline'> {item.name}</p>
                                    <p>{item.age}</p>
                                </div>
                            </div>
                        )
                    })) : <h2> لايوجد مواعيد</h2>
                    }
                </div>
            </Col>
        </Row>
    )
}
export default DatesList