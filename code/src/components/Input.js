import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchFoods } from '../reducers/foods'

export const Input = () => {
const dispatch = useDispatch()

  return ( 
    <label>
    {" "}
    Test codes here:{" "}
    {/* <input type="text" 
    onChange={(e) => 
    onDetected(e.target.value)}>
      
    </input> */}

  <input type="text" 
    onChange={() => 
    dispatch(fetchFoods())}>
      
    </input>

  </label>
  )
}