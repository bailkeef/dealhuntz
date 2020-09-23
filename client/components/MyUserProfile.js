import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllListings from './AllListings'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const MyUserProfile = props => {
  let user = props.user
  const listingUserId = props.match.params.userId
  const isSameUser = user.id.toString() === listingUserId
  console.log(props.singleListingUser)
  if (!isSameUser) user = props.singleListingUser
  console.log(user, listingUserId, isSameUser)

  return (
    <div className="user-profile-container card">
      <img className="user-profile-pic" src={user.profilePic} />
      <div className="user-profile-info">
        <h3>Welcome, {user.email}</h3>
        <h4>{user.experience}</h4>
        {isSameUser && (
          <Link to="/profile/update">
            <button>Update My Profile</button>
          </Link>
        )}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    singleListingUser: state.listings.singleListing.userInfo
  }
}

export default connect(mapState)(MyUserProfile)
