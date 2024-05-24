import { Container } from "react-bootstrap";
import Navmenu from "./Navmenu";
import { Catagore, Carditem } from "../../../public/link";
import { items } from "../data/Datamenu";
import { useState } from "react";
const Menufood = () => {
  const [dataItems, setDataItems] = useState(items);
  // filter by all catagori
  const allcatagore = [...new Set(items.map((i) => i.catagores))];
  // filter by catagori
  const filtercatagory = (cat) => {
    if (cat === "الكل") {
      setDataItems(items);
    } else {
      const newarray = items.filter((item) => item.catagores === cat);
      setDataItems(newarray);
    }}
    // serch for word
    const serchword = (word) => {
      if (word !== "") {
        const newarray = items.filter((item) => item.title === word)
        setDataItems(newarray);
      }
    };
    return (
      <>
        <Navmenu  serchword={serchword}/>
        <Container className="d-flex  flex-column  justify-content-center">
          <h6
            style={{
              borderBottom: "solid 1px orange ",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            قائمة الطعام
          </h6>
          <Catagore filtercatagory={filtercatagory} allcatagore={allcatagore} />
          <Carditem dataItems={dataItems} />
        </Container>
      </>
    );
  };
  export default Menufood;
