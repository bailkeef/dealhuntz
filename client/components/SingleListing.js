import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchSingleListing} from '../store/listings'

/**
 * COMPONENT
 */
export const SingleListing = props => {
  const listingId = props.match.params.listingId

  useEffect(() => {
    props.fetchSingleListing(listingId)
    console.log(props, 'props')
  }, [])

  let listing = props.singleListing
  console.log(listing, 'LISTING')

  return (
    <div className="listing">
      <img src={listing.imgUrl} className="listing__img" />
      <div className="listing__container">
        <h3>{listing.address}</h3>
        <h3>{listing.price}</h3>
        <p>{listing.description}</p>
        <button>{listing.sellerEmail}</button>
        <Link to={`/profile/${listing.userId}`}>
          <button type="submit" className="listing__view-seller">
            View Seller
          </button>
        </Link>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    singleListing: state.listings.singleListing
  }
}

const mapDispatch = (dispatch, state) => {
  return {
    fetchSingleListing: listingId => dispatch(fetchSingleListing(listingId))
  }
}

export default connect(mapState, mapDispatch)(SingleListing)
