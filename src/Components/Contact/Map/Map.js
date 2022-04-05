import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrganizations } from "../../../redux/Organization/organizationSlice";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { IconLeaflet } from "./iconMarker";
import { parseString } from "../../../helpers/parseString";
import axios from "axios";
import Spinner from "../../../shared/Spinner/Spinner";
import { Box } from '@mui/material';
import "./styles/map.css";
import "leaflet/dist/leaflet.css";


export const Map = () => {
  const [position, setPosition] = useState([]);
  const [address, setAddress] = useState("");
  const [cargarMapa, setCargarMapa] = useState(false);

  const dispatch = useDispatch();
  const { organizations } = useSelector((state) => state.organization);

  useEffect(() => {
    dispatch(getOrganizations());
  }, []);

  useEffect(() => {
    const addressParse = parseString(organizations.address);
    setAddress(addressParse);
  }, [organizations]);

  useEffect(() => {
    const getCoordenadas = async () => {
      const apikey = "AIzaSyBrnV2YKJWwvsWRtdQUt3xOcOmcFnuFSAs";
      const url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
      const { data } = await axios(`${url}${address}&key=${apikey}`);
      const { lat, lng } = data.results[0].geometry.location;
      setPosition([lat, lng]);
    };
    getCoordenadas();
  }, [address]);

  useEffect(() => {
    setTimeout(() => {
      setCargarMapa(true);
    }, 1500);
  }, [position]);

  return (
    <Box>
      {cargarMapa ? (
        <MapContainer center={position} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={IconLeaflet}>
            <Popup> {organizations.name} </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <Spinner width={80} heigth={80} color="#000" />
      )}
    </Box>
  );
};
