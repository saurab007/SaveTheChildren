import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../utils/Navbar';
import { ChildCard } from './ChildCard';

export default function Children() {
	const [volunterStatus, setVolunterStatus] = React.useState(false);
	const [childrenData, setChildrenData] = React.useState([]);
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
			const resp = await fetch('http://localhost:8000/children/all', {
				method: 'GET',
				credentials: 'include',
			});
			const data = await resp.json();
			setChildrenData(data);
		})();
	}, []);
	return (
		<Navbar layoutName={'Children'}>
			<nav className='flex items-center justify-between px-10 bg-white py-6 border-b'>
				<div className='flex items-center'>
					<div className='flex items-center gap-2 w-full py-1 px-5 rounded-xl text-black'>
						Children
					</div>
				</div>
				{volunterStatus && (
					<Link to={'/children/apply'}>
						<div className='flex items-center space-x-4 cursor-pointer text-xl'>
							<div className='flex items-center gap-2 w-full bg-green-500 py-2 px-5 rounded-xl text-white'>
								Add Child
							</div>
						</div>
					</Link>
				)}
			</nav>
			{childrenData.map((item) => {
				return (
					<ChildCard
						name={item.name}
						description={item.description}
						address={item.address}
						key={item.id}
						image={`http://localhost:8000/children/image/${item.id}`}
						age={item.age}
					/>
				);
			})}
		</Navbar>
	);
}
