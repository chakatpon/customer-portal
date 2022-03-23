import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="copyright">
          &copy; Copyright 2020, The Viriyah Insurance.
        </div>
      </div>
    );
  }
}

export default Footer;
