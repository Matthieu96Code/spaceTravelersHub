import React from 'react';
import { JoinedMissions } from '../components';

const Profile = () => (
  <div className="profile-page container-fluid py-3">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12">
        <h3 className="">My Missions</h3>
        <JoinedMissions />
      </div>
    </div>
  </div>
);

export default Profile;
