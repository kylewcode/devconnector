import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  addLike,
  removeLike,
  deletePost,
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <Link to={`profile/${user}`}>
        <img className='round-img' src={avatar} alt='' />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>Posted on {formatDate(date)}</p>
      <button
        type='button'
        className='btn btn-light'
        onClick={() => addLike(_id)}
      >
        <i className='fas fa-thumbs-up'></i>
        <span>{likes.length > 0 ? likes.length : null}</span>
      </button>
      <button
        type='button'
        className='btn btn-light'
        onClick={() => removeLike(_id)}
      >
        <i className='fas fa-thumbs-down'></i>
      </button>
      <Link to={`post/${_id}`} className='btn btn-primary'>
        Discussion{' '}
        <span className='comment-count'>
          {comments.length > 0 ? comments.length : '0'}
        </span>
      </Link>
      {auth.isAuthenticated && auth.user._id === user ? (
        <button type='button' className='btn btn-danger' onClick={() => deletePost(_id)}>
          <i className='fas fa-times'></i>
        </button>
      ) : null}
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem);
