import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./UserInterface.css";
import { Col, Row } from "antd";
import { Container } from "react-bootstrap";
import UserCard from "./UserCart";

function UserInterface() {
  const [listProduct, setListProduct] = useState([
    {
      name: "Airpods Pro",
      count: 0,
      price: 24900,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJiKtlpQGkIeOyAPV3qQMNkl8uuRzfGWZtIDb_WgDnam8WjhpL&usqp=CAU",
      qty: 10,
      heading: "Wireless Noise Cancelling Earphones",
      des: "AirPods Pro have been designed to deliver active Noise Cancellation for immersive sound. Transparancy mode so much can hear your surroundings.",
    },
    {
      name: "Apple Watch",
      count: 0,
      price: 40900,
      imageUrl: "https://purepng.com/public/uploads/large/apple-watch-pcq.png",
      qty: 15,
      heading: "You’ve never seen a watch like this",
      des: "The most advanced Apple Watch yet, featuring the Always-On Retina display, the ECG app, international emergency calling, fall detection and a built‑in compass.",
    },
    {
      name: "Macbook Pro",
      count: 0,
      price: 199900,
      imageUrl: "https://pngimg.com/uploads/macbook/macbook_PNG8.png",
      qty: 20,
      heading: "The best for the brightest",
      des: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. it’s the ultimate pro notebook for the ultimate user.",
    },
    {
      name: "iPhone 11 pro",
      count: 0,
      price: 106600,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-midnight-green-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566954990073",
      qty: 35,
      heading: "Pro cameras. Pro display. Pro performance",
      des: "A mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.",
    },
    {
      name: "iPad Pro",
      count: 0,
      price: 71900,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156",
      qty: 25,
      heading: "Your next computer is not a computer",
      des: "It’s a magical piece of glass. It’s so fast most PC laptops can’t catch up. And you can use it with touch, pencil, keyboard and now trackpad. It’s the new iPad Pro.",
    },
  ]);

  const [order, setOrder] = useState([{ id: "1", count: 0 }]);

  const handleUp = (index) => {
    let newList = [...listProduct];
    newList[index].count =
      ++newList[index].count > newList[index].qty
        ? newList[index].qty
        : newList[index].count;
    setListProduct(newList);
  };
  const handleDown = (index) => {
    let newList = [...listProduct];
    newList[index].count =
      --newList[index].count < 0 ? 0 : newList[index].count;
    setListProduct(newList);
  };

  const deleteOrder = (index) => {
    let newist = [...listProduct];
    newist[index].count = 0;
    setListProduct(newist);
  };
  const { id, count } = order;
  return (
    <Container className="p-3 main-product">
      <div className="cart-icon">
        <UserCard
          handleUp={handleUp}
          handleDown={handleDown}
          listProduct={listProduct}
          deleteOrder={deleteOrder}
        />
      </div>
      <Row className="w-100 justify-content-between">
        {listProduct.map((item, index) => (
          <Col className="col-item" key={index}>
            <Card
              style={{
                width: "100%",
                backgroundColor: "#000000",
              }}
            >
              <div
                className="d-flex justify-content-between align-items-center p-2 text-white fs-5"
                style={{}}
              >
                <i className="fa-brands fa-apple  "></i>
                <p className="m-0">Apple</p>
              </div>
              <div className="card-img">
                <Card.Img
                  style={{ borderRadius: "0" }}
                  variant="top"
                  src={item.imageUrl}
                />
              </div>

              <Card.Body className="p-0 bg-dark text-white p-2 card-body">
                <Card.Title className="d-flex justify-content-between">
                  {item.name} <i class="fa-solid fa-heart"></i>
                </Card.Title>
                <Card.Text>{item.des}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0">${item.price}</p>
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
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default UserInterface;
