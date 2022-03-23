import React from "react";
import Layout from "../shares/Layout";

class EDocument extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout id="e-document-page" {...this.props}>
        <div className="content">E-Document Page Content</div>
      </Layout>
    );
  }
}

export default EDocument;
