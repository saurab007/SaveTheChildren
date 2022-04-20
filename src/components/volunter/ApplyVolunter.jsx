import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../utils/Navbar';

export const ApplyVolunter = () => {
	const [bloodGroup, setBloodGroup] = useState('A+');
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [image, setImage] = useState('');
	const [phone, setPhone] = useState('');
	const [address, setAddress] = useState('');
	const [citizenship, setCitizenship] = useState('');
	const [occupation, setOccupation] = useState('');
	const history = useHistory();
	React.useEffect(() => {
		(async () => {
			const resp = await fetch('http://localhost:8000/volunter/status', {
				method: 'GET',
				credentials: 'include',
			});
			const volStatus = await resp.json();
			if (volStatus.volunter_status === true) history.push('/volunter');
		})();
	}, [history]);
	const submitHandler = async (e) => {
		e.preventDefault();
		const volunterData = new FormData();
		volunterData.append('firstname', firstname);
		volunterData.append('lastname', lastname);
		volunterData.append('image', image);
		volunterData.append('phone', phone);
		volunterData.append('address', address);
		volunterData.append('bloodGroup', bloodGroup);
		volunterData.append('citizenship', citizenship);
		volunterData.append('occupation', occupation);
		const resp = await fetch('http://localhost:8000/volunter/add', {
			method: 'POST',
			credentials: 'include',
			body: volunterData,
		});
		const respData = await resp.text();
		console.log(respData);
		setFirstname('');
		setLastname('');
		setImage();
		setPhone('');
		setAddress('');
		setCitizenship('');
		setOccupation('');
	};
	return (
		<Navbar layoutName={'Apply Volunter'}>
			<nav className='flex items-center justify-between px-10 bg-white py-6 border-b'>
				<div className='flex items-center'>
					<div className='flex items-center gap-2 w-full py-2 px-5 rounded-xl text-black'>
						Apply Volunters
					</div>
				</div>
			</nav>
			<div className='ml-[5%] mt-10'>
				<form class='px-6 my-5 space-y-6 ' onSubmit={submitHandler}>
					{/* Firstname and Lastname Inputs */}
					<div className='lg:inline-grid lg:grid-cols-12 lg:gap-[130px] mt-12'>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Firstname
							</label>
							<input
								type='text'
								placeholder='First Name'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4'
								value={firstname}
								onChange={(e) => {
									setFirstname(e.target.value);
								}}
							/>
						</div>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Lastname
							</label>
							<input
								type='text'
								placeholder='Last Name'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4'
								value={lastname}
								onChange={(e) => {
									setLastname(e.target.value);
								}}
							/>
						</div>
					</div>

					{/* profile and Phone Inputs */}
					<div className='lg:inline-grid lg:grid-cols-12 lg:gap-[130px]'>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Volunter Image
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
								Phone
							</label>
							<input
								type='text'
								placeholder='9800000000'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4'
								value={phone}
								onChange={(e) => {
									setPhone(e.target.value);
								}}
							/>
						</div>
					</div>

					{/* Address and BloodGroup Inputs */}
					<div className='lg:inline-grid lg:grid-cols-12 lg:gap-[130px] mt-12'>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Address
							</label>
							<input
								type='text'
								placeholder='Itahari'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4'
								value={address}
								onChange={(e) => {
									setAddress(e.target.value);
								}}
							/>
						</div>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Blood Group
							</label>
							<select
								className='border border-[#d1d5db] rounded-md w-full py-4 text-sm bg-white'
								onChange={(e) => {
									setBloodGroup(e.target.value);
								}}
								value={bloodGroup}>
								<option value='A+'>A+</option>
								<option value='A-'>A-</option>
								<option value='B+'>B+</option>
								<option value='B-'>B-</option>
								<option value='O+'>O+</option>
								<option value='O-'>O-</option>
								<option value='AB+'>AB+</option>
								<option value='AB-'>AB-</option>
							</select>
						</div>
					</div>

					{/* Citizenship and Occupation Inputs */}
					<div className='lg:inline-grid lg:grid-cols-12 lg:gap-[130px] mt-6'>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								National Identity {'(Citizenship No)'}
							</label>
							<input
								type='text'
								placeholder='XXX-000'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4'
								value={citizenship}
								onChange={(e) => {
									setCitizenship(e.target.value);
								}}
							/>
						</div>
						<div className='lg:col-span-6'>
							<label className='block text-sm font-medium text-gray-700'>
								Occupation
							</label>
							<input
								type='text'
								placeholder='E.g. Software Developer'
								className='shadow-sm focus:outline-none focus:border-indigo-500 block w-full sm:text-sm border border-[#d1d5db] rounded-md py-4 focus:text-base placeholder:pl-4'
								value={occupation}
								onChange={(e) => {
									setOccupation(e.target.value);
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
