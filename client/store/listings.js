import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SINGLE_LISTING = 'GET_SINGLE_LISTING'
const GET_ALL_LISTINGS = 'GET_ALL_LISTINGS'
const GET_MY_LISTINGS = 'GET_MY_LISTINGS'
const ADD_LISTING = 'ADD_LISTING'

/**
 * INITIAL STATE
 */
const initialState = {
  allListings: [],
  singleListing: {},
  myListings: []
}

/**
 * ACTION CREATORS
 */
const getListing = listing => ({type: GET_SINGLE_LISTING, listing})
const getAllListings = listings => ({type: GET_ALL_LISTINGS, listings})
const getMyListings = listings => ({type: GET_MY_LISTINGS, listings})
const createListing = listing => ({type: ADD_LISTING, listing})

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
    const listingRes = await axios.get(`/api/listings/${listingId}`)
    const listing = listingRes.data
    let {userId} = listing
    const userRes = await axios.get(`/api/users/${Number(userId)}`)
    listing.sellerEmail = userRes.data.email
    console.log(listing, 'listing')
    dispatch(getListing(listing || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const fetchMyListings = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/listings/users/${userId}`)
    let listings = res.data
    console.log(listings, 'listings')
    dispatch(getMyListings(listings || initialState))
  } catch (err) {
    console.error(err)
  }
}

export const addNewListing = (userId, listing) => async dispatch => {
  try {
    const res = await axios.post(`/api/listings/create/${userId}`, listing)
    let newListing = res.data
    dispatch(createListing(newListing || initialState))
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
    case GET_MY_LISTINGS:
      return {...state, myListings: action.listings}
    case ADD_LISTING:
      return {...state, myListings: [...state.myListings, action.listing]}
    default:
      return state
  }
}
