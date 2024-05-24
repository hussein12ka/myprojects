import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Dataquestion from '../data/Dataquestion';
import { useState } from 'react';
const FormLabel = ({ onAdd, notify }) => {
    const [qu, setQu] = useState('')
    const [an, setAn] = useState('')
    const addNewItem = () => {
        if (qu ==="" || an === "") {
            notify("من فضلك اكمل البيانات","Error");
            return;
        }
        Dataquestion.push({ id:Math.random(), quiz: qu, answer: an });
        setQu('')
        setAn('')
        onAdd();
        console.log(Dataquestion)
    }
    return (<>
        <Row className='my-3'>
            <Col sm="5" className='my-4'  >
                <Form.Control value={qu} placeholder="ادخل السؤال" onChange={(e) => setQu(e.target.value)} />
            </Col>
            <Col sm="2">
                <Button onClick={addNewItem} type='submit'> أرسال</Button>

            </Col>
            <Col sm="5" className='my-4'>
                <Form.Control value={an} placeholder="ادخل الجواب" onChange={(e) => setAn(e.target.value)} />
            </Col>
        </Row>
    </>
    );
}
export default FormLabel;
