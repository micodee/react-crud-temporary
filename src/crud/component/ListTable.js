import React from "react";
import Table from "react-bootstrap/Table";

const ListTable = ({ makanans }) => {
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
            <tr>
              <td>{index+1}</td>
              <td>{makanan.nama}</td>
              <td>Rp {makanan.harga}</td>
              <td>{makanan.deskripsi}</td>
              <td>Edit</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ListTable;
