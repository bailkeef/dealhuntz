import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
// import {fetchMyListings} from '../store/listings'
// import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const CreateListing = props => {
  const {register, handleSubmit, errors} = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className="create-listing">
      <h2>Create New Listing</h2>
      <div className="all-listings">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="address"
            name="address"
            ref={register({required: 'address required'})}
          />
          <input
            type="text"
            placeholder="city"
            name="city"
            ref={register({required: 'city required'})}
          />
          <input
            type="text"
            placeholder="state"
            name="state"
            ref={register({required: 'state required'})}
          />
          <input
            type="text"
            placeholder="zipcode"
            name="zipcode"
            ref={register({required: 'zipcode required'})}
          />
          {errors.address && <p>{errors.address.message}</p>}
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // myListings: state.listings.myListings,
    // user: state.user
  }
}

const mapDispatch = (dispatch, state) => {
  return {
    // fetchMyListings: (userId) => dispatch(fetchMyListings(userId))
  }
}

export default connect(mapState, mapDispatch)(CreateListing)
