import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllListings from './AllListings'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserProfile = props => {
  let user = props.user
  const listingUserId = props.match.params.userId
  const isSameUser = user.id.toString() === listingUserId
  if (isSameUser === false) {
    user = props.singleListingUser
  }
  console.log(user, listingUserId, isSameUser)

  return (
    <div className="user-profile-container card">
      <img className="user-profile-pic" src={user.profilePic} />
      <div className="user-profile-info">
        {isSameUser && <h3>Welcome, {user.email}</h3>}
        <h4>{user.market}</h4>
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

const mapDispatch = (dispatch, state) => {
  return {
    fetchSingleListing: listingId => dispatch(fetchSingleListing(listingId))
  }
}

export default connect(mapState, mapDispatch)(UserProfile)
