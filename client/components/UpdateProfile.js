import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {updateProfile} from '../store/users'

/**
 * COMPONENT
 */
export const UpdateProfile = props => {
  const {register, handleSubmit, errors} = useForm()

  const onSubmit = data => {
    props.updateProfile(props.user.id, data)
    props.history.push('/profile')
  }

  return (
    <div className="create-listing">
      <h2>Update Profile</h2>
      <div className="all-listings">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="create-listing-form"
          encType="multipart/form-data"
        >
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
          </div>
          <div className="create-listing-form-section">
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
            <input
              type="file"
              id="img"
              name="picture"
              accept="image/*"
              ref={register({required: 'main image required'})}
            />
          </div>
          <div className="create-listing-form-section">
            <textarea
              rows="4"
              cols="40"
              name="description"
              placeholder="description"
              ref={register({required: 'description required'})}
            />
          </div>
          <div className="create-listing-form-section">
            <input type="submit" />
          </div>
          {errors.address && <p>{errors.address.message}</p>}
          {errors.city && <p>{errors.city.message}</p>}
          {errors.state && <p>{errors.state.message}</p>}
          {errors.zipcode && <p>{errors.zipcode.message}</p>}
          {errors.price && <p>{errors.price.message}</p>}
          {errors.description && <p>{errors.description.message}</p>}
          {errors.type && <p>{errors.type.message}</p>}
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
    user: state.user
  }
}

const mapDispatch = (dispatch, state) => {
  return {}
}

export default connect(mapState, mapDispatch)(UpdateProfile)

var usStates = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Minor Outlying Islands',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'U.S. Virgin Islands',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]
