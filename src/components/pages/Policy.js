import React from "react";
import { Link } from "react-router-dom";
import Layout from "../shares/Layout";
import BlockFull from "../shares/BlockFull";

class Policy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout id="policy-page" {...this.props}>
        <div className="content flex-column">
          <h1>{"ข้อมูลกรมธรรม์"}</h1>
          <BlockFull>
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <span className="material-icons h1">directions_car</span>
                <div className="h3">{"ประกันรถยนต์"}</div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Link to="/policy" className="policy-card">
                  <span className="material-icons h1">directions_car</span>
                  <div className="h3">{"พ.ร.บ"}</div>
                </Link>
                <Link to="/policy" className="policy-card">
                  <span className="material-icons h1">directions_car</span>
                  <div className="h3">{"กรมธรรม์ประเภท 1"}</div>
                </Link>
                <Link to="/policy" className="policy-card">
                  <span className="material-icons h1">directions_car</span>
                  <div className="h3">{"กรมธรรม์ประเภท 2"}</div>
                </Link>
              </div>
            </div>
          </BlockFull>

          <BlockFull>
            <div className="d-flex flex-column">
              <div className="d-flex align-items-center">
                <span class="material-icons h1">person</span>
                <div className="h3">{"ประกันสุขภาพ"}</div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <Link to="/policy" className="policy-card">
                  <span className="material-icons h1">coronavirus</span>
                  <div className="h3">{"COVID-19"}</div>
                </Link>
                <Link to="/policy" className="policy-card">
                  <span className="material-icons h1">home</span>
                  <div className="h3">{"ประกันอัคคีภัยที่อยู่อาศัย"}</div>
                </Link>
                <Link to="/policy" className="policy-card">
                  <span className="material-icons h1">local_hospital</span>
                  <div className="h3">{"ประกันภัยอุบัติเหตุและสุขภาพ"}</div>
                </Link>
              </div>
            </div>
          </BlockFull>
        </div>
      </Layout>
    );
  }
}

export default Policy;
