import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delProduct, selectProduct } from "../redux/action";

function ProductList() {
  const producList = useSelector((state) => state.productReducer.products);
  console.log(producList);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    console.log(id);
    dispatch(delProduct(id));
  };
  const handleSelect = (product) => {
    dispatch(selectProduct(product));
  };
  return (
    <Container className="pt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {producList.map((product, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleDelete(product.id)}
                >
                  DEL
                </Button>
                <Button variant="warning" onClick={() => handleSelect(product)}>
                  EDIT
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductList;
