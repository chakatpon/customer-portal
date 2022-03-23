import React from "react";
import { Link } from "react-router-dom";
import avatarIMG from "../../assets/img/manAvatar.png";

class UserPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="user-panel">
          <div className="image-cropper">
            <img src={avatarIMG} alt="avatar" className="user-image"></img>
          </div>
          <div className="welcome-label">
            <span>{"ยินดีต้อนรับ "}</span>
            <span className="firstname">{"ชคัทพล"}</span>
            <span className="lastname">{"ขุนทอง"}</span>
          </div>
        </div>
        <div className="noti-panel">
          <Link to="/policy" className="noti-block">
            <div className="w-30 d-flex justify-content-center">
              <span class="material-icons h1">local_police</span>
            </div>
            <div className="w-40 h4 d-flex justify-content-center">
              <div>
                <div>{"กรมธรรม์"}</div>
                <div>{"ทั้งหมด"}</div>
              </div>
            </div>
            <div className="w-30 h1">{"5"}</div>
          </Link>
          <Link to="/policy" className="noti-block">
            <div className="w-30 d-flex justify-content-center">
              <span class="material-icons h1">policy</span>
            </div>
            <div className="w-40 h4 d-flex justify-content-center">
              <div>
                <div>{"กรมธรรม์"}</div>
                <div>{"กำลังหมดอายุ"}</div>
              </div>
            </div>
            <div className="w-30 h1">{"1"}</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserPanel;
