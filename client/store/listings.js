import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SINGLE_LISTING = 'GET_SINGLE_LISTING'
const GET_ALL_LISTINGS = 'GET_ALL_LISTINGS'

/**
 * INITIAL STATE
 */
const initialState = {
  allListings: [],
  singleListing: {}
}

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
    dispatch(getAllListings(listings || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const fetchSingleListing = listingId => async dispatch => {
  try {
    const res = await axios.get(`/api/listings/${listingId}`)
    let listing = res.data
    dispatch(getListing(listing || initialState))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_LISTING:
      return {...state, singleListing: action.listing}
    case GET_ALL_LISTINGS:
      return {...state, allListings: action.listings}
    default:
      return state
  }
}
