import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {updateProfile} from '../store/user'

/**
 * COMPONENT
 */
export const UpdateProfile = props => {
  const {register, handleSubmit, errors} = useForm()

  const onSubmit = data => {
    props.updateProfile(props.user.id, data)
    console.log(data, 'data from update profile')
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
              placeholder="name"
              name="name"
              ref={register()}
            />
            <input
              type="text"
              placeholder="profile pic url"
              name="profilePic"
              ref={register()}
            />
            <input
              type="text"
              placeholder="market"
              name="market"
              ref={register()}
            />
          </div>
          <div className="create-listing-form-section">
            <textarea
              rows="4"
              cols="40"
              type="text"
              placeholder="experience"
              name="experience"
              ref={register()}
            />
          </div>
          <div className="create-listing-form-section">
            <input type="submit" />
          </div>
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
  return {
    updateProfile: userId => dispatch(updateProfile(userId))
  }
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
