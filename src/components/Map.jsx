import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "60vh",
};

export default function Map({ lat, lng }) {
  const center = {
    lat: lat,
    lng: lng,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAP_API}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker
          position={{
            lat: lat,
            lng: lng,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}
