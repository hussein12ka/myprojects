import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function Navmenu({ serchword }) {
  const [filterword, setFilterword] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    serchword(filterword);
    setFilterword('');
  };

  return (
    <Row dir='rtl'>
      <Navbar bg="dark" className='d-flex justify-content-between px-4'>
        <Navbar.Brand href="/Menufood">
          <div style={{ color: "orange" }}>
            مطعم الفهد
          </div>
        </Navbar.Brand>
        <Form className="d-flex" onSubmit={onSearch}>
          <Form.Control
            type="search"
            placeholder="البحث"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setFilterword(e.target.value)}
            value={filterword}
          />
          <button type="submit" className='rectangel'>بحث</button>
        </Form>
      </Navbar>
    </Row>
  );
}

export default Navmenu;