import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ListingPreview from './ListingPreview'

/**
 * COMPONENT
 */
export const AllListings = props => {
  console.log(props, 'props')
  console.log(props.props.img, 'props')
  let allListings = props.props
  return (
    <div className="all-listings">
      {allListings.map((listing, id) => {
        return (
          <div key={id}>
            <ListingPreview props={listing} />
          </div>
        )
      })}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

export default connect(mapState)(AllListings)

/**
 * PROP TYPES
 */
// Listing.propTypes = {
//   email: PropTypes.string
// }
