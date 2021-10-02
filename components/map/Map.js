import { useState } from "react";
import { getCenter } from "geolib";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { v4 } from "uuid";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  //   Transform searchResults into something "geolib" understands
  const coordinates = searchResults.map((item) => ({
    longitude: item.long,
    latitude: item.lat,
  }));

  //   Geolib finding center of all our searchResults coordinates
  const center = getCenter(coordinates);

  // ReactMapGL Setup
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 7,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/wilderdev/ckuaavva26k8f19qj6etlivy2"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults?.map((item) => (
        <div key={v4()}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl"
              onClick={() => setSelectedLocation(item)}
              aria-label="boxing-glove location pin"
            >
              🥊
            </p>
          </Marker>

          {/* Popup that shows when we click on a marker */}
          {selectedLocation.long === item.long &&
            selectedLocation.lat === item.lat && (
              <Popup
                onClose={() => setSelectedLocation({})}
                latitude={item.lat}
                longitude={item.long}
                closeOnClick={true}
              >
                {item.title}
              </Popup>
            )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
