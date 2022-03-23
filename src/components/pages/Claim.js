import React from "react";
import Layout from "../shares/Layout";

class Claim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout id="claim-page" {...this.props}>
        <div className="content"></div>
      </Layout>
    );
  }
}

export default Claim;
