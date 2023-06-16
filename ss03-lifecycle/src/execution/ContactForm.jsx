import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      error: null,
      success: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    if (!name || !email || !message) {
      this.setState({
        error: "Please fill all the fields",
      });
      return;
    }
    this.setState({
      success: true,
    });
  };

  render() {
    const { name, email, message, error, success } = this.state;
    return (
      <div>
        {!success ? (
          <form action="" onSubmit={this.handleSubmit}>
            {error && <div style={{ color: "red" }}>{error}</div>}
            <div>
              <label htmlFor="">Name: </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Email: </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Message: </label>
              <input
                type="text"
                name="message"
                value={message}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div style={{ color: "green" }}>Message is submited</div>
        )}
      </div>
    );
  }
}

export default ContactForm;
