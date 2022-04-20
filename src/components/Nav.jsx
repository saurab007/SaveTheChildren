/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../images/logo.png';

function Nav() {
	const history = useHistory();
	return (
		<nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5'>
			<div className='container flex flex-wrap justify-between items-center mx-auto'>
				<a className='flex ml-2'>
					<img src={Logo} alt='logo' height={100} width={150} />
				</a>
				<div className='flex md:order-2 gap-8'>
					<button
						type='button'
						onClick={(e) => {
							e.preventDefault();
							history.push('/login');
						}}
						className='text-white bg-gray-700  focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'>
						Login
					</button>
					<button
						type='button'
						onClick={(e) => {
							e.preventDefault();
							history.push('/register');
						}}
						className='text-white bg-red-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'>
						Register
					</button>
				</div>
				<div
					className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
					id='mobile-menu-4'>
					<ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
						<li>
							<a
								className='block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-black'
								aria-current='page'>
								Home
							</a>
						</li>
						<li>
							<a className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>
								About
							</a>
						</li>
						<li>
							<a className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-black hover:text-black'>
								Services
							</a>
						</li>
						<li>
							<a className='block py-2 pr-4 pl-3 text-gray-700 border-b hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-black dark:hover:text-white md:dark:hover:bg-transparent border-gray-700'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
