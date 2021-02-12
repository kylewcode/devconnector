import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({education: {
  school,
  degree,
  fieldofstudy,
  current,
  to,
  from,
  description,
}}) => {
  return (
    <div>
      <h3 className='text-dark'>{school}</h3>
      <p>{formatDate(from)} - {current ? 'Current' : formatDate(to)}</p>
      <p>
        <strong>Degree: </strong>{degree}
      </p>
      <p>
        <strong>Field of Study: </strong>{fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>{description}
      </p>
    </div>
  );
};

ProfileExperience.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileExperience;
