import React, { Component } from "react";

class Btbai4Controls extends Component {
  render() {
    return (
      <div>
        <div>
          <span>search</span>
          <input onChange={this.props.handleSearch}></input>
        </div>

        <div>
          <span>Sắp xếp</span>
          <select onChange={this.props.handleSort}>
            <option value="id">--select--</option>
            <option value="id">id</option>

            <option value="name">Name</option>
            <option value="age">age</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Btbai4Controls;
