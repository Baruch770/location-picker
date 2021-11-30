import React from 'react';
import { Icon } from "leaflet";
import { Marker, Popup } from 'react-leaflet';


import markerIconPng from "../../assets/marker.svg"


export default function Location({ point }) {
    return (
        <Marker position={point} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
            <Popup>
                i am location: {point}
            </Popup>
        </Marker>
    )
}
