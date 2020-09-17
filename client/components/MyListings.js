import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ListingPreview from './ListingPreview'
import {fetchMyListings} from '../store/listings'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const MyListings = props => {
  useEffect(() => {
    props.fetchMyListings(props.user.id)
  }, [])

  console.log(props, 'propsss')
  let myListings = props.myListings

  return (
    <div className="my-listings">
      <h2>My Listings</h2>
      <Link to="listings/create-listing">
        <button className="add-new-listing-button">Add New Listing</button>
      </Link>
      <div className="all-listings">
        {myListings.map((listing, id) => {
          return (
            <div className="listing-preview card" key={id}>
              <Link to={`listings/${listing.id}`}>
                <ListingPreview listing={listing} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    myListings: state.listings.myListings,
    user: state.user
  }
}

const mapDispatch = (dispatch, state) => {
  return {
    fetchMyListings: userId => dispatch(fetchMyListings(userId))
  }
}

export default connect(mapState, mapDispatch)(MyListings)
