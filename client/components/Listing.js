import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Listing = props => {
  return (
    <div className="listing">
      <img src={props.listing.imgUrl} className="listing__img" />
      <div className="listing__container">
        <h3>{props.listing.address}</h3>
        <h3>{props.listing.price}</h3>
        <p>{props.listing.description}</p>
        <button type="submit" className="listing__contact-button">
          Contact Seller
        </button>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

export default connect(mapState)(Listing)

/**
 * PROP TYPES
 */
// Listing.propTypes = {
//   email: PropTypes.string
// }
