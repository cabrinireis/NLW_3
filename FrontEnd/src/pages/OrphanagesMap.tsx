import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/marker.svg';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcons';
import api from '../services/api';

interface Orphanage{
    id:number,
    latitude:number,
    longitude:number,
    name:string
}

function OrphanagesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
useEffect(() => {
    api.get('orphanages').then(response => {
        setOrphanages(response.data)
    });
})
    return (
        <div id="page-map">
            <aside>
                <header>
                <Link to="/" >
                    <img src={mapMarkerImg} alt="Happy"/>
                </Link>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Fortaleza</strong>
                    <span>Ceara</span>
                </footer>
            </aside>
            <Map
                center={[-3.8324187, -38.5799608]}
                zoom={15}
                style={{width: '100%', height:'100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {orphanages.map(orphanage => {
                    return (
                        <Marker 
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup" >
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={32} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>
            <Link to="/neworphanage" className="create-orphanage">
                <FiPlus size="32" color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;