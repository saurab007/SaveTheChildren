import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../utils/Navbar';
import { VolunterCard } from './VolunterCard';

export default function Volunter() {
	const [volunterStatus, setVolunterStatus] = React.useState(false);
	const [voluntersData, setVoluntersData] = React.useState([]);
	React.useEffect(() => {
		(async () => {
			const resp = await fetch('http://localhost:8000/volunter/status', {
				method: 'GET',
				credentials: 'include',
			});
			const volStatus = await resp.json();
			setVolunterStatus(volStatus.volunter_status);
		})();
		(async () => {
			const resp = await fetch('http://localhost:8000/volunter/all', {
				method: 'GET',
				credentials: 'include',
			});
			const data = await resp.json();
			setVoluntersData(data);
		})();
	}, []);
	return (
		<Navbar layoutName={'Volunter'}>
			<nav className='flex items-center justify-between px-10 bg-white py-6 border-b'>
				<div className='flex items-center'>
					<div className='flex items-center gap-2 w-full py-1 px-5 rounded-xl text-black'>
						Volunters
					</div>
				</div>
				{!volunterStatus && (
					<Link to={'/volunter/apply'}>
						<div className='flex items-center space-x-4 cursor-pointer text-xl'>
							<div className='flex items-center gap-2 w-full bg-green-500 py-2 px-5 rounded-xl text-white'>
								Apply Volunteer
							</div>
						</div>
					</Link>
				)}
			</nav>
			{voluntersData.map((item) => {
				return (
					<VolunterCard
						firstname={item.firstname}
						lastname={item.lastname}
						address={item.address}
						phone={item.phone}
						key={item.id}
						image={`http://localhost:8000/volunter/image/${item.id}`}
						bloodGroup={item.bloodGroup}
						citizenship={item.citizenship}
						occupation={item.occupation}
					/>
				);
			})}
			{/* <VolunterCard
				firstname={'anjal'}
				lastname={'dhakal'}
				image={'http://localhost:8000/volunter/image/1'}
			/> */}
		</Navbar>
	);
}
