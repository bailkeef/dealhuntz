import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {addNewListing} from '../store/listings'

/**
 * COMPONENT
 */
export const CreateListing = props => {
  const {register, handleSubmit, errors} = useForm()
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [price, setPrice] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = data => {
    props.addNewListing(props.user.id, data)
    // setAddress('');
    // setCity('');
    // setState('');
    // setZipcode('');
    // setPrice('');
    // setType('');
    // setDescription('');
    props.history.push('/sell')
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
              // value={address}
              ref={register({required: 'address required'})}
            />
            <input
              type="text"
              placeholder="city"
              name="city"
              // value={city}
              ref={register({required: 'city required'})}
            />
          </div>
          <div className="create-listing-form-section">
            <select
              type="text"
              placeholder="state"
              name="state"
              // value={state}
              ref={register({required: 'state required'})}
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>

            <input
              type="text"
              placeholder="zipcode"
              name="zipcode"
              // value={zipcode}
              ref={register({required: 'zipcode required'})}
            />
          </div>
          <div className="create-listing-form-section">
            <input
              type="text"
              placeholder="price"
              name="price"
              // value={price}
              ref={register({required: 'price required'})}
            />
            <select name="type" ref={register({required: 'type required'})}>
              <option value="turnkey">turnkey</option>
              <option value="flip">flip</option>
            </select>
            <input type="file" id="img" name="mainImage" accept="image/*" />
          </div>
          <div className="create-listing-form-section">
            <textarea
              rows="4"
              cols="40"
              name="description"
              placeholder="description"
              // value={description}
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
    // myListings: state.listings.myListings,
    user: state.user
  }
}

const mapDispatch = (dispatch, state) => {
  return {
    addNewListing: (userId, listing) => dispatch(addNewListing(userId, listing))
  }
}

export default connect(mapState, mapDispatch)(CreateListing)

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
