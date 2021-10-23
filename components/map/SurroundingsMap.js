import { useState } from "react";
import { getCenter } from "geolib";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const SurroundingsMap = ({ latitude, longitude, name }) => {
  console.log("latitude, longitude:", latitude, longitude);

  const center = getCenter([{ longitude: longitude, latitude: latitude }]);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 13,
  });

  //   TSK: use mapbox streets:
  // https://docs.mapbox.com/help/tutorials/local-search-geocoding-api/
  // https://docs.mapbox.com/help/tutorials/tilequery-healthy-food-finder/
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/wilderdev/ckv441qkg5buh14o6bkmphwyq"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <div className="min-h-[80vh]">
        <Marker
          longitude={longitude}
          latitude={latitude}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <p
            role="img"
            className="cursor-pointer text-2xl"
            //     onClick={() => setSelectedLocation(item)}
            aria-label="boxing-glove location pin"
          >
            🥊
          </p>
        </Marker>

        {/* Popup that shows when we click on a marker */}
        {longitude && latitude && (
          <Popup latitude={latitude} longitude={longitude} closeButton={false}>
            {name}
          </Popup>
        )}
      </div>
    </ReactMapGL>
  );
};

export default SurroundingsMap;

// IX_TSK
// 1. Use https://docs.mapbox.com/help/tutorials/get-started-isochrone-api/ to show how close everything is
// 2. Add search capabilities
