import React, { Component } from "react";
import ListForm from "./component/ListTambahData";
import ListNavbar from "./component/ListNavbar";
import ListTable from "./component/ListTable";

export default class Crud extends Component {
  render() {
    return (
      <div>
        <ListNavbar />
        <div className="container-sm mt-4">
          <h2>CRUD REACT JS</h2>
          <ListTable />
          <ListForm />
        </div>
      </div>
    );
  }
}
