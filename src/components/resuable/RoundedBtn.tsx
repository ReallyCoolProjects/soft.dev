import React from 'react'

const RoundedBtn = (props:any) => {
  return (
    <button
    type="button"
    className={`text-black bg-[${props.primary}] hover:bg-[${props.hover}] focus:outline-none focus:ring-4  font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2`}
  >
    Sign Up
  </button>
  )
}

export default RoundedBtn