import React, { Component } from "react";

class BtBai6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "sports",
    };
  }

  handleTabClick = (tabName) => {
    this.setState({
      activeTab: tabName,
    });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <button
          onClick={() => this.handleTabClick("sports")}
          className={activeTab === "sports" ? "active" : ""}
        >
          Thể thao
        </button>
        <button
          onClick={() => this.handleTabClick("culture")}
          className={activeTab === "culture" ? "active" : ""}
        >
          Văn hóa
        </button>
        <button
          onClick={() => this.handleTabClick("science")}
          className={activeTab === "science" ? "active" : ""}
        >
          Khoa học
        </button>

        {activeTab === "sports" && <div>Nội dung thể thao</div>}
        {activeTab === "culture" && <div>Nội dung văn hóa</div>}
        {activeTab === "science" && <div>Nội dung khoa học</div>}
      </div>
    );
  }
}

export default BtBai6;
