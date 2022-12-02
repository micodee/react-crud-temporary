import React from "react";
import {Table,Button} from "react-bootstrap/";

const ListTable = ({ makanans, editData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Makanan</th>
          <th>Harga</th>
          <th>Deskripsi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {makanans.map((makanan, index) => {
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{makanan.nama}</td>
              <td>Rp {makanan.harga}</td>
              <td>{makanan.deskripsi}</td>
              <td><Button variant="primary" onClick={() => editData(makanan.id)}>Edit</Button></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ListTable;
