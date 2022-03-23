import React from "react";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile-form">
        <h2>{"ข้อมูลส่วนตัว"}</h2>
        <form>
          <div class="form-row">
            <div class="form-group col-md-2">
              <label for="prefix">{"คำนำหน้าชื่อ"}</label>
              <select id="prefix" class="form-control">
                <option selected>{"นาย"}</option>
                <option>{"นาง"}</option>
                <option>{"นางสาว"}</option>
              </select>
            </div>
            <div class="form-group col-md-5">
              <label for="firstname">{"ชื่อ"}</label>
              <input type="text" class="form-control" id="firstname" />
            </div>
            <div class="form-group col-md-5">
              <label for="lastname">{"นามสกุล"}</label>
              <input type="text" class="form-control" id="lastname" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-2">
              <div>{"เพศ"}</div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="male">
                  {"ชาย"}
                </label>
              </div>

              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="female">
                  {"หญิง"}
                </label>
              </div>
            </div>

            <div class="form-group col-md-10">
              <label for="cardId">{"เลขบัตรประชาชน"}</label>
              <input type="text" class="form-control" id="cardId" />
            </div>
          </div>

          <div class="form-group">
            <label for="inputAddress">{"ที่อยู่"}</label>
            <input type="text" class="form-control" id="inputAddress" />
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="province">{"จังหวัด"}</label>
              <select id="province" class="form-control">
                <option selected>{"จังหวัด"}</option>
                <option>{"เชียงใหม่"}</option>
              </select>
            </div>

            <div class="form-group col-md-6">
              <label for="district">{"อำเภอ"}</label>
              <select id="district" class="form-control">
                <option selected>{"อำเภอ"}</option>
                <option>{"สันทราย"}</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="subDistrict">State</label>
              <select id="subDistrict" class="form-control">
                <option selected>{"แขวง/ตำบล"}</option>
                <option>{"ป่าไผ่"}</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="zipcode">{"รหัสไปรษณีย์"}</label>
              <input type="text" class="form-control" id="zipcode" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="telephone">{"เบอร์โทรศัพท์"}</label>
              <input type="text" class="form-control" id="telephone" />
            </div>
            <div class="form-group col-md-6">
              <label for="email">{"อีเมลล์"}</label>
              <input type="email" class="form-control" id="email" />
            </div>
          </div>

          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            {"แก้ไข"}
          </button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;
