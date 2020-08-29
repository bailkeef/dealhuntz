import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ListingPreview from './ListingPreview'
import {fetchAllListings} from '../store/listings'

/**
 * COMPONENT
 */
export const AllListings = props => {
  useEffect(() => {
    props.fetchAllListings()
  }, [])
  console.log(props, 'props')
  let allListings = props.allListings
  return (
    <div className="all-listings">
      {allListings.map((listing, id) => {
        return (
          <div className="listing-preview" key={id}>
            <ListingPreview listing={listing} />
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
  return {
    allListings: state.listings.allListings
  }
}

const mapDispatch = (dispatch, state) => {
  return {
    fetchAllListings: () => dispatch(fetchAllListings())
  }
}

export default connect(mapState, mapDispatch)(AllListings)

/**
 * PROP TYPES
 */
// Listing.propTypes = {
//   email: PropTypes.string
// }
