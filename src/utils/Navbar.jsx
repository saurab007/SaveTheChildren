import React from 'react';
import { BiHome } from 'react-icons/bi';
import { FaChild, FaPeopleCarry, FaRegUser } from 'react-icons/fa';
import { FiLogOut, FiMapPin } from 'react-icons/fi';
import { MdPayment } from 'react-icons/md';
import { VscSettingsGear } from 'react-icons/vsc';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../images/logo.png';

function Navbar({ children }) {
	const history = useHistory();
	return (
		<>
			<div class='relative min-h-screen md:flex'>
				<div class='sidebar bg-white text-blue-100 w-64 space-y-6 py-4 px-2 inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-r-2 sticky top-0'>
					{/* <p class='text-black flex items-center space-x-2 px-4 border-2'>
						<Link to={'/dashboard'}>
							<span class='text-2xl font-extrabold'>Save The Children</span>
						</Link>
					</p> */}

					<img
						src={Logo}
						className='mx-auto'
						alt='logo'
						width={140}
						height={80}
					/>

					<nav className='border-t-2'>
						<p className='text-gray-500 py-2.5 px-4'>Menu</p>
						<Link to={'/dashboard'}>
							<p class='text-black flex py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white'>
								<BiHome size={22} />
								<span className='ml-3'>Dashboard</span>
							</p>
						</Link>
						<Link to={'/children'}>
							<p class='text-black flex py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white'>
								<FaChild size={22} />
								<span className='ml-3'>Children</span>
							</p>
						</Link>
						<Link to={'/volunter'}>
							<p class='text-black flex py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white'>
								<FaPeopleCarry size={22} />
								<span className='ml-3'>Volunteers</span>
							</p>
						</Link>
						<Link to={'/donation'}>
							<p class='text-black flex py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white'>
								<MdPayment size={22} />
								<span className='ml-3'>Donations</span>
							</p>
						</Link>
						<Link to={'/map'}>
							<p class='text-black flex py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white'>
								<FiMapPin size={22} />
								<span className='ml-3'>Map</span>
							</p>
						</Link>
						<p className='text-gray-500 py-2.5 px-4 mt-4'>Settings</p>
						<Link to={'/profile'}>
							<p class='text-black flex py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white'>
								<FaRegUser size={22} />
								<span className='ml-3'>Profile</span>
							</p>
						</Link>

						<Link to={'/settings'}>
							<p class='text-black flex py-2.5 px-4 rounded transition duration-200 hover:bg-gray-400 hover:text-white'>
								<VscSettingsGear size={22} />
								<span className='ml-3'>Settings</span>
							</p>
						</Link>

						{/* logout button */}
						<p
							class='text-red-500 flex py-2.5 px-4 rounded transition duration-200 cursor-pointer hover:font-bold'
							onClick={async (e) => {
								await fetch('http://localhost:8000/logout', {
									method: 'GET',
									credentials: 'include',
								});
								history.push('/login');
							}}>
							<FiLogOut size={22} />
							<span className='ml-3 font-medium'>Logout</span>
						</p>
					</nav>
				</div>

				<div class='flex-1 text-2xl font-bold'>{children}</div>
			</div>
		</>
	);
}

export default Navbar;
