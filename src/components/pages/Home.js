import React from "react";
import Layout from "../shares/Layout";
import BlockHalf from "../shares/BlockHalf";
import UserPanel from "../home/UserPanel";
import SummaryChart from "../home/SummaryChart";
import PromotionBlock from "../home/PromotionBlock";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoURL: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Layout id="home-page" {...this.props}>
        <div className="content">
          <BlockHalf>
            <UserPanel></UserPanel>
            <SummaryChart></SummaryChart>
          </BlockHalf>
          <PromotionBlock />
        </div>
      </Layout>
    );
  }
}

export default Home;
