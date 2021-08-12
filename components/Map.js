import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';


function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});


  // tranform searchResults object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))
  
  
  // center the coordinates
  const center = getCenter(coordinates);

  
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });


  return (
    <ReactMapGL
      mapStyle='mapbox://styles/hf97/cks96ee1i2bsq17o3q505t54y'
      mapboxApiAccessToken={process.env.mapbox_key}
      { ...viewport }
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      { searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p 
              role='img'
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer text-2xl animate-bounce'
              aria-label='push-pin'
            >
              📌
            </p>
          </Marker>

          {/* popup on click */}
          {selectedLocation.long === result.long && selectedLocation.lat === result.lat ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              { result.title }
            </Popup>
          ) : (
            null
          )}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
