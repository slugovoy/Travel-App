import React, { useRef } from "react";
import { Marker, Popup } from "react-map-gl";
import { updateRating } from "../utils/api";

function OldMarkers({ entry, setPopup, showPopup, viewport, onClose}) {
  const newRatingRef = useRef();

  function openForm(id) {
    const parentId = id;
    console.log(newRatingRef.current.value);
    console.log(parentId);
    updateRating({rating: newRatingRef.current.value}, parentId);
    newRatingRef.current.value = "";
    // TODO - make form close on click of ADD button
    onClose();
    
  }

  return (
    <React.Fragment key={entry._id}>
      <Marker latitude={entry.latitude} longitude={entry.longitude}>
        <div
          onClick={() =>
            setPopup({
              [entry._id]: true,
            })
          }
        >
          <svg
            className="marker red"
            style={{
              width: `${5 * viewport.zoom}px`,
              height: `${5 * viewport.zoom}px`,
              stroke: "green",
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
      {showPopup[entry._id] ? (
        <Popup
          latitude={entry.latitude}
          longitude={entry.longitude}
          closeButton={true}
          closeOnClick={false}
          dynamicPosition={true}
          onClose={() => setPopup({})}
          anchor="top"
        >
          <div className="popup">
            <h3>{entry.title}</h3>
            <p>Comments: {entry.comments}</p>
            <p>Description: {entry.description}</p>
            <small>
              Visited on: {new Date(entry.visitDate).toLocaleDateString()}
            </small>
            <p>
              Rating:{" "}
              {Math.round(
                entry.rating.reduce((a, b) => parseInt(a) + parseInt(b)) /
                  entry.rating.length
              )}
            </p>
            <div className="rateDiv">
              <input
                name="addRating"
                ref={newRatingRef}
                placeholder="Add your rating here"
              />
              <button
                className="btn btn-primary ml-4"
                onClick={() => openForm(entry._id)}
              >
                Add
              </button>
            </div>
            {entry.image && <img src={entry.image} alt={entry.title} />}
          </div>
        </Popup>
      ) : null}
    </React.Fragment>
  );
}

export default OldMarkers;
