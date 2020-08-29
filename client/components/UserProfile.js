import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllListings from './AllListings'

/**
 * COMPONENT
 */
export const UserProfile = props => {
  const {email} = props

  return (
    <div className="all-listings-container">
      <h3>Welcome, {email}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserProfile)
