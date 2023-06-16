import React, { Component } from "react";
import Btbai4Controls from "./Btbai4Controls";

class BtBai4 extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
      sortText: "",
      data: [
        { id: 1, name: "Sasuke", age: 18 },
        { id: 4, name: "Batman", age: 30 },
        { id: 3, name: "Chihuahua", age: 20 },
        { id: 2, name: "momo", age: 15 },
      ],
      newTableData: [],
    };
  }

  handleSearch = (e) => {
    const searchText = e.target.value;
    this.setState({
      searchText,
      newTableData: this.state.data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    });
  };

  handleSort = (e) => {
    const sortText = e.target.value;
    let sortData = [...this.state.data];
    switch (sortText) {
      case "id":
        sortData.sort((a, b) => a.id - b.id);
        break;
      case "name":
        sortData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "age":
        sortData.sort((a, b) => a.age - b.age);
        break;
      default:
        break;
    }
    this.setState({
      sortText,
      newTableData: sortData,
    });
  };
  render() {
    return (
      <div>
        <Btbai4Controls
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />

        <table style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            {
              // this.state.data
              //   .filter((item) =>
              //     item.name
              //       .toLowerCase()
              //       .includes(this.state.searchText.toLowerCase())
              //   )
              (this.state.newTableData.length > 0
                ? this.state.newTableData
                : this.state.data
              ).map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default BtBai4;
