import L from 'leaflet';

export const IconLeaflet = L.icon({
    iconUrl: require('./image/iconMap.png'),
    iconRetinaUrl: require('./image/iconMap.png'),
    iconAnchor: null, 
    shadowUrl: null,
    shadowUrl: null,
    shadowAnchor: null,
    iconSize: [45, 45],
    className: "leaflet-icon"
})