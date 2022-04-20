import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Navbar from '../../utils/Navbar';

export default function Map() {
	const nepalPosition = [28.3949, 84.124];
	const itahariPosition = [26.6646, 87.2718];
	const dharanposition = [26.8065, 87.2846];
	const markers=[itahariPosition,dharanposition];
	return (
		<Navbar layoutName={'Map'}>
			<MapContainer
				center={nepalPosition}
				zoom={7}
				className='leaflet-container'>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				{markers.map((val=> <Marker position={val}>
									
									<Popup>
										Hi, user profile uploading soon
									</Popup>
								</Marker>))}
					 
				{/* <Marker position={itahariPosition}>
									
					<Popup>
						Hi, user profile uploading soon
					</Popup>
				</Marker> */}
				
			</MapContainer>
		</Navbar>
		
	);
}
