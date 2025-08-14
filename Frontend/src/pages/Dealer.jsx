
import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import dealer from '../assets/dealer.png'

const allDealers = [
  { id: 1, name: 'Murshidabad Battery House', address: 'NH12, Berhampore, Murshidabad', pin: '742101', lat: 24.1033, lng: 88.2588 },
  { id: 2, name: 'Nadia Power Solutions', address: 'Krishnanagar Main Rd, Nadia', pin: '741101', lat: 23.4027, lng: 88.5013 },
  { id: 3, name: 'Asansol E-Rickshaw Parts', address: 'GT Road, Asansol, Paschim Bardhaman', pin: '713301', lat: 23.6849, lng: 86.9535 },
  { id: 4, name: 'Durgapur Battery Center', address: 'City Centre, Durgapur, Paschim Bardhaman', pin: '713216', lat: 23.5204, lng: 87.3119 },
  { id: 5, name: 'Malda Auto Electricals', address: 'Rathbari More, Malda', pin: '732101', lat: 25.0076, lng: 88.1404 },
  { id: 6, name: 'Siliguri Power House', address: 'Hill Cart Road, Siliguri, Darjeeling', pin: '734001', lat: 26.7271, lng: 88.3953 },
  { id: 7, name: 'Kolkata Central Batteries', address: 'Esplanade, Kolkata', pin: '700069', lat: 22.5626, lng: 88.3538 },
  { id: 8, name: 'Howrah Bridge Battery Shop', address: 'Shibpur, Howrah', pin: '711102', lat: 22.5851, lng: 88.3243 },
  { id: 9, name: 'Barasat Auto Zone', address: 'Jessore Road, Barasat, North 24 Parganas', pin: '700124', lat: 22.7214, lng: 88.4771 },
  { id: 10, name: 'Haldia Port Batteries', address: 'Port Township, Haldia, Purba Medinipur', pin: '721607', lat: 22.0520, lng: 88.0888 },
  { id: 11, name: 'Kharagpur Power Grid', address: 'IIT Main Gate, Kharagpur, Paschim Medinipur', pin: '721302', lat: 22.3145, lng: 87.3091 },
  { id: 12, name: 'Bankura Battery Hub', address: 'Lal Bazar, Bankura', pin: '722101', lat: 23.2369, lng: 87.0722 },
  { id: 13, name: 'Purulia E-Vehicle Store', address: 'Main Market, Purulia', pin: '723101', lat: 23.3339, lng: 86.3698 },
  { id: 14, name: 'Cooch Behar Royal Batteries', address: 'Palace Road, Cooch Behar', pin: '736101', lat: 26.3272, lng: 89.4465 },
  { id: 15, name: 'Raiganj Power Distributors', address: 'College Para, Raiganj, Uttar Dinajpur', pin: '733134', lat: 25.6163, lng: 88.1230 },
];

const Dealer = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDealers = useMemo(() => {
    if (!searchTerm) {
      return allDealers;
    }
    return allDealers.filter(dealer => dealer.pin.includes(searchTerm));
  }, [searchTerm]);

  const defaultPosition = [24.0, 88.0]; 

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
          <p className="text-lg mt-4">Locate your nearest Leighton Industries authorized dealer.</p>
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

              <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                {filteredDealers.length > 0 ? (
                  filteredDealers.map(dealer => (
                    <div key={dealer.id} className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="text-lg font-bold text-brand-dark">{dealer.name}</h3>
                      <p className="text-gray-600 flex items-start mt-1">
                        <FiMapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-gray-400" />
                        {dealer.address}, West Bengal - {dealer.pin}
                      </p>
                      <button className="mt-3 text-sm font-semibold text-green-600 hover:text-green-800">
                        Get Directions
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-center p-8 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold">No dealers found</h3>
                    <p className="text-gray-500 text-sm">Please try a different PIN code.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 h-[80vh] rounded-lg overflow-hidden shadow-lg z-0">
            <MapContainer center={defaultPosition} zoom={7} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filteredDealers.map(dealer => (
                <Marker key={dealer.id} position={[dealer.lat, dealer.lng]}>
                  <Popup>
                    <strong>{dealer.name}</strong><br />
                    {dealer.address}, {dealer.pin}
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

export default Dealer;
