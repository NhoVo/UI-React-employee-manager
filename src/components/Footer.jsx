import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <footer className="footer">
          <span className="text-muted">Võ Thành Nhớ - SE - IUH @2022</span>
        </footer>
      </div>
    );
  }
}

export default Footer;
