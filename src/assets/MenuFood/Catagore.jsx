import { Button, Col, Row } from "react-bootstrap";
const Catagore = ({ filtercatagory, allcatagore }) => {
  const onfilter = (cat) => {
    filtercatagory(cat);
  };
  return (
    <Row>
      <Col sm="12">
        <div className="d-flex  flex-column justify-content-center ">
          <div className="d-flex justify-content-center ">
            {allcatagore.length >= 1
              ? allcatagore.map((cat) => {
                  return (
                    <Button onClick={() => onfilter(cat)} className="mx-2">
                     {cat}
                    </Button>
                  );
                })
              : null}
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Catagore;
