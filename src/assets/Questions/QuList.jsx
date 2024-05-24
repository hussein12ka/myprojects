import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Dataquestion from "../data/Dataquestion";
function QuList({ data, Delatone }) {
    // خزن العنصر الجاي من الوكال ستوريج  وخزن 
    const datalocal = JSON.parse(localStorage.getItem("items"))
    // to delete from aray
    const onDaleteItem = (ID) => {
        if (data.length >= 1) {
            const index = Dataquestion.findIndex((item) => item.id === ID);
            Dataquestion.splice(index, 1)
            Delatone(Dataquestion)
        }
    }
    return (
        <Accordion>
            {localStorage.getItem("items") != null ? (data.map((item, index) => {
                return (
                    <Accordion.Item eventKey={item.id} key={index}>
                        <Accordion.Header>السؤال {item.quiz}</Accordion.Header>
                        <Accordion.Body>الجواب <Button onClick={() => onDaleteItem(item.id)}> مسح  </Button> {item.answer}</Accordion.Body>
                    </Accordion.Item>
                );
            })
            ) : (
                <p> لايوجد اسئلة</p>
            )}
        </Accordion>
    );
}
export default QuList;
