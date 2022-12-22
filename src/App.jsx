import './App.css'
import banner from './assets/img/banner.png'
import LocationInfo from './components/LocationInfo';
import useApi from './hooks/useApi';
import Card from './components/Card'
import InputSearch from './components/InputSearch';
import { useState } from 'react';
import Loader from './components/Loader';

function App() {

  const [searchLocation, setSearchLocation] = useState()

  const {location, loading} = useApi (searchLocation)

  return (
    <div className="App">
      <div className="header">
        <img src={banner} alt="font" />
      </div>
      <LocationInfo className="applocation" location={location} />
      <InputSearch setSearchLocation={setSearchLocation}/>
      <div className='containerdiv'>
      {
      loading ?
         <Loader/>
            :
         location.residents.map((resident) => (
            <Card key={resident} resident={resident} />
      ))
      }
      </div>

    </div>
  );
}

export default App
