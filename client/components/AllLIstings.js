import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ListingPreview from './ListingPreview'
import {fetchAllListings} from '../store/listings'
import {Link} from 'react-router-dom'
import DropdownFilter from './filtering/DropdownFilter'

/**
 * COMPONENT
 */
export const AllListings = props => {
  useEffect(() => {
    props.fetchAllListings()
  }, [])

  let allListings = props.allListings

  return (
    <div className="all-listings">
      <div className="filter-container">
        <DropdownFilter />
      </div>
      {allListings.map((listing, id) => {
        return (
          <div className="listing-preview" key={id}>
            <Link to={`listings/${listing.id}`}>
              <ListingPreview listing={listing} />
            </Link>
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
