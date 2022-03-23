import React from "react";

import viriyahImage from "../../assets/img/logo-viriyah-964x340-32bit.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <img className="header-img" src={viriyahImage}></img>
      </div>
    );
  }
}

export default Header;
