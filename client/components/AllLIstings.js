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
  const [usState, setUsState] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [type, setType] = React.useState('')

  useEffect(() => {
    props.fetchAllListings()
  }, [])

  useEffect(
    () => {
      console.log('usState', usState)
    },
    [usState]
  )

  const handleChange = e => {
    console.log(e, 'e in handleChange alllisting')
    if (e.target.name === 'usState') setUsState(e.target.value)
    else if (e.target.name === 'price') setPrice(e.target.value)
    else if (e.target.name === 'type') setType(e.target.value)
  }

  let allListings = props.allListings

  return (
    <div className="all-listings">
      <div className="filter-container card">
        <DropdownFilter
          onChange={handleChange}
          usState={usState}
          price={price}
          type={type}
        />
      </div>
      {allListings.map((listing, id) => {
        return (
          <div className="listing-preview card" key={id}>
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
