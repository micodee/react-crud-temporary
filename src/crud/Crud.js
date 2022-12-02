import React, { Component } from "react";
import ListForm from "./component/ListTambahData";
import ListNavbar from "./component/ListNavbar";
import ListTable from "./component/ListTable";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama: "",
      harga: 0,
      deskripsi: "",
      id: "",
    };
  }

//   mengubah data state atau menginput ke data state 
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

//   menghilangkan isian seperti reload
  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('halo everybody', this.state)
    this.setState({
        makanans: [
            ...this.state.makanans,
            {
                nama : this.state.nama,
                harga : this.state.harga,
                deskripsi : this.state.deskripsi,
                id: this.state.makanans.length+1,
            }
        ]
    })
  };

  render() {
    // console.log(this.state.makanans)
    return (
      <div>
        <ListNavbar />
        <div className="container-sm mt-4">
          <h2>CRUD REACT JS</h2>
          <ListTable makanans={this.state.makanans}/>
          <ListForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}
