import React from "react";
import Table from 'react-bootstrap/Table';

const ListTable = () => {
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
        <tr>
          <td>1</td>
          <td>Bakso</td>
          <td>Rp 14000</td>
          <td>Mmmmhh rasanya enak</td>
          <td>Edit</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ListTable;
