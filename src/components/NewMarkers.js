import React from 'react'
import { Marker, Popup } from "react-map-gl";
import NewLocationForm from "./NewLocationForm"

function NewMarkers({newLocation, viewport, setNewLocation, getAllPlaces}) {
    return (
        <>
           <Marker
            latitude={newLocation.latitude}
            longitude={newLocation.longitude}
          >
            <div>
              <svg
                className="marker blue"
                style={{
                  width: `${5 * viewport.zoom}px`,
                  height: `${5 * viewport.zoom}px`,
                  stroke: "white",
                }}
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          </Marker>
          <Popup
            latitude={newLocation.latitude}
            longitude={newLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            dynamicPosition={true}
            onClose={() => setNewLocation(null)}
            anchor="top"
          >
            <div className="popup">
              <NewLocationForm
              onClose={() => {
                setNewLocation(null);
                getAllPlaces();
              }} 
              location={newLocation}/>
            </div>
          </Popup> 
        </>
    )
}

export default NewMarkers;
