import React, { Component } from "react";

class DemoLifecycle extends Component {
  componentWillMounts() {
    console.log("1.component will mount");
  }

  componentDidMount() {
    console.log("3  .component did mount");
  }
  render() {
    console.log("2. render");
    return <div>DemoLifecycle</div>;
  }
}

export default DemoLifecycle;
