import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Location from '../location/Location';

export default function Map({ points }) {
    const [correctPoints, setCorrectPoints] = useState([])
    const sameLoacation = [31.8701, 34.92799]

    useEffect(() => {
        var index = Math.floor(Math.random() * points.length);

        const allLocations = points.map((point, i) => i === index ? point : sameLoacation)

        setCorrectPoints([...allLocations])
    }, [])

    return (
        <MapContainer center={sameLoacation} zoom={15} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {correctPoints.map((point, i) => {
                return <Location key={i} point={point} />
            })}

        </MapContainer>
    )
}
