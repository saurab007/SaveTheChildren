import React, { useState } from 'react';
import Navbar from '../../utils/Navbar';

export const AddChildren = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState();
	const [address, setAddress] = useState('');
	const [image, setImage] = useState();
	const [description, setDescription] = useState('');
	const submitHandler = async (e) => {
		e.preventDefault();
		const childData = new FormData();
		childData.append('name', name);
		childData.append('age', age);
		childData.append('address', address);
		childData.append('description', description);
		childData.append('image', image);
		const resp = await fetch('http://localhost:8000/children/add', {
			method: 'POST',
			credentials: 'include',
			body: childData,
		});
		const respData = await resp.text();
		console.log(respData);
		setName('');
		setAge();
		setAddress('');
		setDescription('');
	};
	return (
		<Navbar layoutName={'Apply Volunter'}>
			<nav className='flex items-center justify-between px-10 bg-white py-6 border-b'>
				<div className='flex items-center'>
					<div className='flex items-center gap-2 w-full py-2 px-5 rounded-xl text-black'>
						Add Children
					</div>
				</div>
			</nav>
			<div className='ml-[5%] mt-10'>
				<form class='px-6 my-5 space-y-6 ' onSubmit={submitHandler}>
					{/* Firstname and Lastname Inputs */}
					<div className='lg:inline-grid lg:grid-cols-12 lg:gap-[130px] mt-12'>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Name
							</label>
							<input
								type='text'
								placeholder='Name'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4'
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</div>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Age
							</label>
							<input
								type='text'
								placeholder='eg. 10'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4'
								value={age}
								onChange={(e) => {
									setAge(Number(e.target.value));
								}}
							/>
						</div>
					</div>

					{/* profile and Phone Inputs */}
					<div className='lg:inline-grid lg:grid-cols-12 lg:gap-[130px]'>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Child Image
							</label>
							<input
								type='file'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4 p-4'
								onChange={(e) => {
									setImage(e.target.files[0]);
								}}
							/>
						</div>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Address
							</label>
							<input
								type='text'
								placeholder='eg. Itahari'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4'
								value={address}
								onChange={(e) => {
									setAddress(e.target.value);
								}}
							/>
						</div>
					</div>

					<div className=''>
						<label
							htmlFor='about'
							className='block text-sm font-medium text-gray-700'>
							Description
						</label>
						<div className='mt-1'>
							<textarea
								id='about'
								name='about'
								rows={5}
								className='shadow-sm focus:outline-none focus:border-indigo-500 mt-1 block w-[93%] sm:text-sm border border-[#d1d5db] rounded-md focus:text-base placeholder:pl-2'
								placeholder='Description about the child.'
								value={description}
								onChange={(e) => {
									setDescription(e.target.value);
								}}
							/>
						</div>
					</div>

					<div>
						<button
							type='sumbit'
							class='bg-yellow-700 text-white py-2 px-6 rounded-md hover:bg-red-600 text-lg mt-5'>
							Sumbit
						</button>
					</div>
				</form>
			</div>
		</Navbar>
	);
};
