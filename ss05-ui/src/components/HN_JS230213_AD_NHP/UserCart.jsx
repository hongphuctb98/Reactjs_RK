import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function UserCard({ handleUp, handleDown, listProduct, deleteOrder }) {
  const [show, setShow] = useState(false);
  const cartList = listProduct.filter((item) => item.count > 0);
  const total = cartList.reduce(
    (total, cur) => total + cur.count * cur.price,
    0
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="none "
        onClick={handleShow}
        style={{ color: "#fff ", fontSize: "25px" }}
      >
        <i class="fa-solid fa-cart-shopping"></i>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ width: "800px" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup className="list-group-flush">
            {cartList.map((item, index) => (
              <ListGroup.Item className="d-flex justify-content-between align-items-center mx-3">
                <div style={{ width: "80px", height: "80px" }}>
                  <img src={item.imageUrl} style={{ width: "100%" }}></img>
                </div>
                <p>{item.name}</p>
                <div className="btn-count">
                  <i
                    className="fa-solid  fa-circle-chevron-left"
                    onClick={() => handleDown(index)}
                  ></i>
                  <span className="px-1">{item.count}</span>
                  <i
                    className="fa-solid  fa-circle-chevron-right"
                    onClick={() => handleUp(index)}
                  ></i>
                </div>
                <p> price</p>
                <p
                  onClick={() => deleteOrder(index)}
                  style={{ cursor: "pointer" }}
                >
                  <i class="fa-solid fa-trash"></i>
                </p>
              </ListGroup.Item>
            ))}

            <div> Total: {total}</div>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default UserCard;
