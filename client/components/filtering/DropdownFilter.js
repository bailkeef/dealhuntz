import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {makeStyles} from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

/**
 * COMPONENT
 */

export const DropdownFilter = props => {
  const classes = useStyles()
  console.log(props, 'props')

  const handleChange = e => {
    // Here, we invoke the callback with the new value
    props.onChange(e)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.usState}
          name="usState"
          onChange={handleChange}
        >
          <MenuItem value="New Jersey">New Jersey</MenuItem>
          <MenuItem value="Michigan">Michigan</MenuItem>
          <MenuItem value="Florida">Florida</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">List Price</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.price}
          name="price"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Under $100k">Under $100k</MenuItem>
          <MenuItem value="$100k - $200k">$100k - $200k</MenuItem>
          <MenuItem value="$200k - $300k">$200k - $300k</MenuItem>
          <MenuItem value="$300k - $400k">$300k - $400k</MenuItem>
          <MenuItem value="$400k+">$400k+</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.type}
          name="type"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="turnkey">turnkey</MenuItem>
          <MenuItem value="flip">flip</MenuItem>
        </Select>
        <FormHelperText>Type of investment you are looking for</FormHelperText>
      </FormControl>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

export default connect(mapState)(DropdownFilter)

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))
