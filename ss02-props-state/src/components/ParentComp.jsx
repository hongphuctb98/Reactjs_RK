import React, { Children, Component } from "react";
import ChildrentComp from "./ChildrentComp";

class ParentComp extends Component {
  // parent => children

  render() {
    const title = "Rkkei Academy";
    return (
      <div>
        <ChildrentComp titleParent={title} course={"ReactJS"} />
      </div>
    );
  }
}

export default ParentComp;
