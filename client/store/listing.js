import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SINGLE_LISTING = 'GET_SINGLE_LISTING'
const GET_ALL_LISTING = 'GET_ALL_LISTINGS'

/**
 * INITIAL STATE
 */
const initialState = {}

/**
 * ACTION CREATORS
 */
const getListing = listing => ({type: GET_SINGLE_LISTING, listing})
const getAllListings = listings => ({type: GET_ALL_LISTINGS, listings})

/**
 * THUNK CREATORS
 */
export const fetchAllListings = () => async dispatch => {
  try {
    const res = await axios.get(`/api/listings/`)
    let listings = res.data
    dispatch(getBudgets(listings || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const fetchSingleListing = listingId => async dispatch => {
  try {
    const res = await axios.get(`/api/listings/${listingId}`)
    let listing = res.data
    dispatch(getBudgets(listing || initialState))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
