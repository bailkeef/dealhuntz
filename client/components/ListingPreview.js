import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const ListingPreview = props => {
  return (
    <div>
      <img src={props.listing.imgUrl} className="listing__img" />
      <h3>{props.listing.address}</h3>
      <h3>{props.listing.price}</h3>
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
