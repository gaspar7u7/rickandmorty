import React from 'react'

const LocationInfo = ({location}) => {

    console.log(location);

  return (
    <div className='location'>
        <h2><b>Name: </b>{location?.name}</h2>
        <ul className='list'>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </div>
  )
}

export default LocationInfo