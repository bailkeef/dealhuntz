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
        <form onSubmit={handleSubmit(onSubmit)} className="create-listing-form">
          <div className="create-listing-form-section">
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
          </div>
          <div className="create-listing-form-section">
            <input
              type="text"
              placeholder="price"
              name="price"
              ref={register({required: 'price required'})}
            />
            <select name="type" ref={register({required: 'type required'})}>
              <option value="turnkey">turnkey</option>
              <option value="flip">flip</option>
            </select>
          </div>
          <div className="create-listing-form-section">
            <textarea
              rows="4"
              cols="50"
              name="description"
              placeholder="description"
              ref={register({required: 'description required'})}
            />
          </div>
          {errors.address && <p>{errors.address.message}</p>}
          {errors.city && <p>{errors.city.message}</p>}
          {errors.state && <p>{errors.state.message}</p>}
          {errors.zipcode && <p>{errors.zipcode.message}</p>}
          {errors.price && <p>{errors.price.message}</p>}
          {errors.description && <p>{errors.description.message}</p>}
          {errors.type && <p>{errors.type.message}</p>}
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
