import React, { useState } from 'react'

const InputSearch = ({setSearchLocation}) => {

    const searchLocation = e => {
        e.preventDefault()
        setSearchLocation(e.target.firstChild.value)
    }

  return (
    <form onSubmit={searchLocation} className='input'>
        <input type="text" placeholder='Input a dimension number from 1 to 126'/>
        <button>Search</button>
    </form>
  )
}

export default InputSearch