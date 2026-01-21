import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const center = [41.311081, 69.240562]; // Toshkent koordinatasi

const neighbors = [
  {
    id: 1,
    name: "Qozog'iston",
    coords: [43.238949, 76.889709],
    status: "Active",
  },
  { id: 2, name: "Qirg'iziston", coords: [42.8746, 74.5698], status: "Active" },
  {
    id: 3,
    name: "Tojikiston",
    coords: [38.5598, 68.787],
    status: "Maintenance",
  },
  { id: 4, name: "Turkmaniston", coords: [37.95, 58.38], status: "Active" },
  { id: 5, name: "Afg'oniston", coords: [34.53, 69.16], status: "Active" },
  { id: 6, name: "Toshkent", coords: [41.311081, 69.240562], status: "Active" },
];

function MapComponent() {
  return (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {neighbors.map((country) => (
          <div key={country.id}>
            <Marker position={country.coords}>
              <Popup>
                {country.name}: {country.status}
              </Popup>
            </Marker>
            {/* Toshkentdan qo'shnilarga ulanish chiziqlari */}
            {neighbors.map((country) => (
              <div key={country.id}>
                <Marker position={country.coords}>
                  <Popup>
                    {country.name}: {country.status}
                  </Popup>
                </Marker>

                {/* Animatsiyali ulanish chizig'i */}
                <Polyline
                  positions={[center, country.coords]}
                  pathOptions={{
                    color: country.status === "Active" ? "#22c55e" : "#ef4444", // Faol bo'lsa yashil, bo'lmasa qizil
                    weight: 3,
                    className: "flowing-line", // CSS-dagi animatsiyani ulaymiz
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
