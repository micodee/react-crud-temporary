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
      harga: "",
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
    //submit edit data
    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            nama: this.state.nama,
            harga: this.state.harga,
            deskripsi: this.state.deskripsi,
            id: this.state.makanans.length + 1,
          },
        ],
      });
    } else {
      const makananTidakDipilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => filterMakanan);

      this.setState({
        makanans: [
          ...makananTidakDipilih,
          {
            nama: this.state.nama,
            harga: this.state.harga,
            deskripsi: this.state.deskripsi,
            id: this.state.makanans.length + 1,
          },
        ],
      });
    }
    // tidak sama dengan !==

    // submit add data
    // this.setState({
    //   makanans: [
    //     ...this.state.makanans,
    //     {
    //       nama: this.state.nama,
    //       harga: this.state.harga,
    //       deskripsi: this.state.deskripsi,
    //       id: this.state.makanans.length + 1,
    //     },
    //   ],
    // });

    // membuat data form menjadi kosong
    this.setState({
      nama: "",
      harga: "",
      deskripsi: "",
      id: "",
    });
  };

  // get data edit yang dipilih
  editData = (id) => {
    const makananDipilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => filterMakanan);

    this.setState({
      nama: makananDipilih[0].nama,
      harga: makananDipilih[0].harga,
      deskripsi: makananDipilih[0].deskripsi,
      id: makananDipilih[0].id,
    });
  };

  // hapus data
  hapusData = (id) => {
    const makananBaru = this.state.makanans
      .filter((makanan) => makanan.id !== id)
      .map((filterMakanan) => filterMakanan);

    this.setState({
      makanans: makananBaru,
    });
  };

  render() {
    // console.log(this.state.makanans)
    return (
      <div>
        <ListNavbar />
        <div className="container-sm mt-4">
          <h2>CRUD REACT JS</h2>
          <ListTable
            makanans={this.state.makanans}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <ListForm
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
