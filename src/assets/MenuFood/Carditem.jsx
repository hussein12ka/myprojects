import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../../App.css";
function Carditem({ dataItems }) {
  return (
    <Row dir="rtl">
      {dataItems.length >= 1 ? (
        dataItems.map((items, index) => {
          return (
            <Col sm="12" key={index} className="my-3">
              <Card className="carditem">
                <Card.Img
                  src={items.imgurl}
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                    width: "100%",
                  }}
                />
                <div className="d-flex flex-column">
                  <Card.Body className="d-flex justify-content-between">
                    <Card.Title>
                      {" "}
                      <h5> {items.title}</h5>{" "}
                    </Card.Title>
                    <Card.Title>
                      {" "}
                      <h6> {items.price}</h6>{" "}
                    </Card.Title>
                  </Card.Body>
                  <Card.Text>{items.desc}</Card.Text>
                </div>
              </Card>
            </Col>
          );
        })
      ) : (
        <h6 className="my-4">لايوجد عناصر</h6>
      )}
    </Row>
  );
}
export default Carditem;
