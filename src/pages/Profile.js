import React from 'react';
import { JoinedMissions, ReservedRockets } from '../components';

const Profile = () => (
  <div className="profile-page container-fluid py-3">
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 col-12 pe-3">
        <h3 className="">My Missions</h3>
        <JoinedMissions />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-12 ps-3">
        <h3 className="">My Rockets</h3>
        <ReservedRockets />
      </div>
    </div>
  </div>
);

export default Profile;
