
import React, { useState, useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FiSearch, FiMapPin } from "react-icons/fi";
import axios from "axios";
import dealer from "../assets/dealer.png";

const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  map.flyTo(center, zoom, { duration: 1.5 });
  return null;
};

const FindDealerPage = () => {
  const [allDealers, setAllDealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const defaultPosition = [24.0, 88.0]; // Centered on West Bengal
  const [mapView, setMapView] = useState({ center: defaultPosition, zoom: 7 });

  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/dealers`);
        setAllDealers(response.data.data);
      } catch (err) {
        setError("Failed to load dealer information. Please try again later.");
        console.error("Fetch dealers error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDealers();
  }, []);

  const filteredDealers = useMemo(() => {
    if (!searchTerm) {
      return allDealers;
    }
    return allDealers.filter((dealer) => dealer.pinCode.includes(searchTerm));
  }, [searchTerm, allDealers]);

  useEffect(() => {
    if (filteredDealers.length === 1) {
      const dealer = filteredDealers[0];
      setMapView({ center: [dealer.location.lat, dealer.location.lng], zoom: 15 });
    } else {
      setMapView({ center: defaultPosition, zoom: 7 });
    }
  }, [filteredDealers]);

  return (
    <div className="bg-white">
      <div className="relative h-112">
        <img
          src={dealer}
          alt="Map and location"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center bg-black/60 text-white text-center p-4">
          <h1 className="text-5xl font-bold">Find a Dealer</h1>
          <p className="text-lg mt-4">
            Locate your nearest Leighton Industries authorized dealer.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Enter PIN Code..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
              </div>

              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                {loading && <p>Loading dealers...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {!loading && !error && (
                  filteredDealers.length > 0 ? (
                    filteredDealers.map((dealer) => (
                      <div
                        key={dealer._id}
                        className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200"
                      >
                        <h3 className="text-lg font-bold text-brand-dark">
                          {dealer.name}
                        </h3>
                        <p className="text-gray-600 flex items-start mt-1">
                          <FiMapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-green-400" />
                          {dealer.address}, West Bengal - {dealer.pinCode}
                        </p>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${dealer.location.lat},${dealer.location.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block text-sm font-semibold text-green-600 hover:text-green-800"
                        >
                          Get Directions
                        </a>
                      </div>
                    ))
                  ) : (
                    <div className="text-center p-8 bg-gray-50 rounded-lg">
                      <h3 className="font-semibold">No dealers found</h3>
                      <p className="text-gray-500 text-sm">
                        Please try a different PIN code.
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 h-[80vh] rounded-lg overflow-hidden shadow-lg z-0">
            <MapContainer
              center={mapView.center}
              zoom={mapView.zoom}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <ChangeView center={mapView.center} zoom={mapView.zoom} />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filteredDealers.map((dealer) => (
                <Marker key={dealer._id} position={[dealer.location.lat, dealer.location.lng]}>
                  <Popup>
                    <strong>{dealer.name}</strong>
                    <br />
                    {dealer.address}, {dealer.pinCode}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDealerPage;
