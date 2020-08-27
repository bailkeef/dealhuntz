import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Listing = props => {
  console.log(props, 'props')
  console.log(props.props.img, 'props')
  return (
    <div className="listing">
      <img src={props.props.img} className="listing__img" />
      <div className="listing__container">
        <h3>{props.props.address}</h3>
        <h3>{props.props.price}</h3>
        <p>{props.props.description}</p>
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
