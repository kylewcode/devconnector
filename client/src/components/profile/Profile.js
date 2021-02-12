import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getProfileById } from '../../actions/profile';

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return <Fragment>
    {profile === null || loading ? <Spinner /> : 
    <Fragment>
      <Link to='/profiles' className='btn btn-light'>Back to Profiles</Link>
      {auth.isAuthenticated && !loading && auth.user._id === profile.user._id ? 
      <Link to='/edit-profile'>Edit the Profile</Link> : null}
      <div className="profile-grid my-1">
        <ProfileTop profile={profile} />
        <ProfileAbout profile={profile} />
      </div>
      </Fragment>}
  </Fragment>;
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
