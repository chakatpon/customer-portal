import React from "react";
import Layout from "../shares/Layout";
import ProfileForm from "../profile/ProfileForm";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout id="profile-page" {...this.props}>
        <div className="content">
          <ProfileForm />
        </div>
      </Layout>
    );
  }
}

export default Profile;
