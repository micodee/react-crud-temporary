import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


const ListForm = ({nama, harga, deskripsi, handleChange, handleSubmit, id }) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama-makanan">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="text" name="nama" placeholder="Masukan nama makanan" 
              value={nama} onChange={(event) => handleChange(event)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="harga-makanan">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" name="harga" placeholder="Masukan harga makanan" 
              value={harga} onChange={(event) => handleChange(event)} required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="deskripsi-makanan">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" name="deskripsi" rows={3} placeholder="Masukan deskripsi makanan" 
              value={deskripsi} onChange={(event) => handleChange(event)} required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default ListForm;
