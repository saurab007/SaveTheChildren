/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from '../images/logo.png';

function Register({ history }) {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [secondPassword, setSecondPassword] = useState('');

	const registerHandler = async (e) => {
		e.preventDefault();
		await fetch('http://localhost:8000/register', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				username: username,
				password: password,
			}),
		});
		history.push('/login');
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<img
						onClick={(e) => {
							e.preventDefault();
							history.push('/');
						}}
						className='cursor-pointer mx-auto h-12 w-auto'
						src={Logo}
						alt=''
					/>
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-600'>
						Register an account
					</h2>
					{/* <p className='mt-2 text-center text-sm text-gray-600'>
						Or
						<a
							href='#'
							className='font-medium text-indigo-600 hover:text-indigo-500'>
							start your 14-day free trial
						</a>
					</p> */}
				</div>
				<form className='mt-8 space-y-6' onSubmit={registerHandler}>
					<input type='hidden' name='remember' value='True' />
					<div className='rounded-md shadow-sm'>
						<div>
							<label className='sr-only'>Email address</label>
							<input
								type='email'
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								autocomplete='email'
								required
								className='appearance-none rounded-lg relative block w-full h-[50px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Email address'
							/>
						</div>
						<div className='mt-5'>
							<label className='sr-only'>Password</label>
							<input
								type='text'
								value={username}
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								required
								className='appearance-none rounded-lg relative block w-full h-[50px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Username'
							/>
						</div>
						<div className='mt-5'>
							<label className='sr-only'>Password</label>
							<input
								type='password'
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								required
								className='appearance-none rounded-lg relative block w-full h-[50px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Password'
							/>
						</div>
						<div className='mt-5'>
							<label className='sr-only'>Confirm Password</label>
							<input
								type='password'
								value={secondPassword}
								onChange={(e) => {
									setSecondPassword(e.target.value);
								}}
								required
								className='appearance-none rounded-lg relative block w-full h-[50px] px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Confirm Password'
							/>
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center text-sm'>
							<a
								onClick={(e) => {
									e.preventDefault();
									history.push('/login');
								}}
								className='cursor-pointer font-medium text-indigo-600 hover:text-indigo-500'>
								Login
							</a>
						</div>

						{/* <div className='text-sm'>
							<a
								href='#'
								className='font-medium text-indigo-600 hover:text-indigo-500'>
								Forgot your password?
							</a>
						</div> */}
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
							<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
								<svg
									className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									aria-hidden='True'>
									<path
										fill-rule='evenodd'
										d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
										clip-rule='evenodd'
									/>
								</svg>
							</span>
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default withRouter(Register);
