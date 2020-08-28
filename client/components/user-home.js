import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllListings from './AllListings'

const mockListings = [
  {
    id: 1,
    address: '123 Main St',
    price: '$100,000',
    description:
      'Great bones, 3 bedroom, 1 bathroom home sits on a huge corner lot! Huge sunroom off the back. Oversized storage shed in the back. Hardwoods throughout under the carpet. Fantastic opportunity to move in, hold as a rental, or fix and flip!',
    type: 'wholesale',
    img:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    id: 2,
    address: '123 Main St',
    price: '$100,000',
    description:
      'Great bones, 3 bedroom, 1 bathroom home sits on a huge corner lot! Huge sunroom off the back. Oversized storage shed in the back. Hardwoods throughout under the carpet. Fantastic opportunity to move in, hold as a rental, or fix and flip!',
    type: 'wholesale',
    img:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  },
  {
    id: 3,
    address: '123 Main St',
    price: '$100,000',
    description:
      'Great bones, 3 bedroom, 1 bathroom home sits on a huge corner lot! Huge sunroom off the back. Oversized storage shed in the back. Hardwoods throughout under the carpet. Fantastic opportunity to move in, hold as a rental, or fix and flip!',
    type: 'wholesale',
    img:
      'https://charlotteagenda-charlotteagenda.netdna-ssl.com/wp-content/uploads/2020/04/hot-homes-outdoor-living.jpg'
  }
]

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <AllListings props={mockListings} />
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

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
