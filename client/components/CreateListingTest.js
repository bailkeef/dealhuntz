import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {useForm} from 'react-hook-form'
import {addNewListing} from '../store/listings'
import axios from 'axios'

/**
 * COMPONENT
 */
export const CreateListingTest = props => {
  // const {register, handleSubmit, errors} = useForm()
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Choose File')
  const [uploadedFile, setUploadedFile] = useState({})

  const onChange = e => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)
    console.log('onChange', file, filename)
  }

  const onSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    console.log(file, 'file before append')
    formData.append('file', file)

    try {
      const res = axios.post('/photos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      console.log(res, 'res in test')
      const {fileName, filePath} = res.data
      console.log(fileName, filePath, 'fileName and filePath')

      setUploadedFile({fileName, filePath})
      console.log(uploadedFile, 'state uploadedFile')
    } catch (err) {
      console.log(err, 'error')
    }
  }

  return (
    <div className="create-listing">
      <h2>Create New Listing</h2>
      <div className="all-listings">
        <form
          className="create-listing-form"
          onSubmit={onSubmit}
          action="/upload"
          method="POST"
          encType="multipart/form-data"
        >
          <input
            type="file"
            id="img"
            name="file"
            accept="image/*"
            onChange={onChange}
          />
          <label>{filename}</label>
          <div className="create-listing-form-section">
            <input type="submit" value="Upload" />
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
    // myListings: state.listings.myListings,
    user: state.user
  }
}

const mapDispatch = (dispatch, state) => {
  return {
    addNewListing: (userId, listing) => dispatch(addNewListing(userId, listing))
  }
}

export default connect(mapState, mapDispatch)(CreateListingTest)

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
