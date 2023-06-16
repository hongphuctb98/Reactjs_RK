import React, { Component } from "react";
import "./BtBai5.css";
class BtBai5 extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      imgList: [
        {
          id: 1,
          src: "https://i.pinimg.com/564x/4f/c8/99/4fc899e31ba91e7d3073295eb8bbd5cf.jpg",
        },
        {
          id: 2,
          src: "https://i.pinimg.com/564x/6c/b9/27/6cb92734a8a3bc440c85e93729c8483f.jpg",
        },
        {
          id: 3,
          src: "https://i.pinimg.com/564x/28/4f/4d/284f4d293cea322e27da19680ddbac3c.jpg",
        },
        {
          id: 4,
          src: "https://i.pinimg.com/564x/11/ba/1f/11ba1f6a577ced6601bc25a076bed844.jpg",
        },
        {
          id: 5,
          src: "https://i.pinimg.com/564x/9d/e0/f0/9de0f00261e5cfd6d04b8bf4d54459d7.jpg",
        },
        {
          id: 6,
          src: "https://i.pinimg.com/564x/ac/68/cf/ac68cff91d26d082d9611ee55a8547de.jpg",
        },
      ],
    };
  }

  handlePrev = () => {
    const i =
      this.state.currentIndex - 1 < 0
        ? this.state.imgList.length - 1
        : this.state.currentIndex - 1;
    this.setState({
      currentIndex: i,
    });
  };
  handleNext = () => {
    const i =
      this.state.currentIndex + 1 > this.state.imgList.length - 1
        ? 0
        : this.state.currentIndex + 1;
    this.setState({
      currentIndex: i,
    });
  };
  render() {
    return (
      <div className="slider">
        <i class="fa-solid fa-caret-left" onClick={this.handlePrev}></i>
        <div>
          <img src={this.state.imgList[this.state.currentIndex].src} alt="" />
        </div>
        <i class="fa-solid fa-caret-right" onClick={this.handleNext}></i>
      </div>
    );
  }
}

export default BtBai5;
