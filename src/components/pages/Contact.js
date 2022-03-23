import React from "react";
import Layout from "../shares/Layout";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout id="contact-page" {...this.props}>
        <div className="content">Contact Page Content</div>
      </Layout>
    );
  }
}

export default Contact;
