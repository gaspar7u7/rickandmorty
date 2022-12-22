import {useState, useEffect} from 'react'
import axios from 'axios'

const useApi = searchLocation => {

    const [location, setLocation] = useState();
    const [loading, setLoading] = useState(true)
      
    useEffect(() => {
      let locationNumber
      if(searchLocation === undefined){
        locationNumber = Math.ceil(Math.random() * 126)
      } else {
        locationNumber = searchLocation
      }
      const URL =`https://rickandmortyapi.com/api/location/${locationNumber}`
      axios.get(URL)
        .then(res => {
            setLocation(res.data)
            setLoading(false)
        })
        .catch(error => console.log(error))
  
    }, [searchLocation])
  
    return {location, loading}
      
  }
  
  export default useApi