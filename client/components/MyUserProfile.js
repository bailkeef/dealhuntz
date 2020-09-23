import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllListings from './AllListings'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const MyUserProfile = props => {
  const user = props.user

  return (
    <div className="user-profile-container card">
      <img className="user-profile-pic" src={user.profilePic} />
      <div className="user-profile-info">
        <h3>Welcome, {user.email}</h3>
        <h4>{user.description}</h4>
        <Link to="/profile/update">
          <button>Update My Profile</button>
        </Link>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(MyUserProfile)
