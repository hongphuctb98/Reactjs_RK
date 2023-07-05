import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../redux/action";

function ProductForm() {
  const dispatch = useDispatch();

  const selectProduct = useSelector(
    (state) => state.productReducer.selectedProduct
  );
  const [product, setProduct] = useState({ id: "", name: "", price: "" });

  useEffect(() => {
    if (selectProduct) {
      setProduct(selectProduct);
    }
  }, [selectProduct]);
  // change input
  const handeChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  //Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.id) {
      // edit
      dispatch(updateProduct(product));
    } else {
      const newProduct = { ...product, id: Date.now() };
      dispatch(addProduct(newProduct));
    }

    setProduct({ id: "", name: "", price: "" });
  };
  return (
    <Container style={{ width: "50%" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={product.name}
            onChange={handeChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Price"
            name="price"
            value={product.price}
            onChange={handeChange}
          />
        </Form.Group>
        {selectProduct ? (
          <Button variant="warning" type="submit">
            Edit
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Add
          </Button>
        )}
      </Form>
    </Container>
  );
}

export default ProductForm;
