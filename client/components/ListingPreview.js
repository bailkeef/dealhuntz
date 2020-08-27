import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const ListingPreview = props => {
  console.log(props, 'props')
  console.log(props.props.img, 'props')
  return (
    <div className="listing-preview">
      <img src={props.props.img} className="listing__img" />
      <h3>{props.props.address}</h3>
      <h3>{props.props.price}</h3>
      <button type="submit" className="listing__contact-button">
        Contact Seller
      </button>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

export default connect(mapState)(ListingPreview)

/**
 * PROP TYPES
 */
// Listing.propTypes = {
//   email: PropTypes.string
// }
