import ReactMapGL from "react-map-gl";

const Map = () => {
  console.log(
    "process.env.NEXT_PUBLIC_MAPBOX_STYLES_URL:",
    process.env.NEXT_PUBLIC_MAPBOX_STYLES_URL
  );
  console.log("process.env.MAP:", process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);

  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLES_URL}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    ></ReactMapGL>
  );
};

export default Map;
