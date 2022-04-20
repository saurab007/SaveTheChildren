import React from 'react';

export const VolunterCard = ({
	firstname,
	lastname,
	image,
	phone,
	address,
	bloodGroup,
	citizenship,
	occupation,
}) => {
	return (
		<div>
			<div className='flex flex-col gap-5 items-center bg-white mt-10'>
				<card class='border-gray-300 border-2 rounded-xl w-[65%] py-7 px-5'>
					<div class='grid grid-cols-6 gap-3'>
						<div class='col-span-2 mx-auto rounded-full'>
							<img src={image} alt={firstname} width={100} height={100} />
						</div>

						<div class='col-span-4'>
							<p class='text-gray-700 font-bold'>
								{' '}
								{firstname.toUpperCase()} {lastname.toUpperCase()}{' '}
							</p>
							<div class='text-gray-500 mt-4 text-base flex flex-row gap-10'>
								<p>Phone {phone}</p>
								<p>Address {address}</p>
								<p>Bloog Group {bloodGroup}</p>
								<p>Citizenship No {citizenship}</p>
								<p>Occupation {occupation}</p>
							</div>
						</div>
					</div>
				</card>
			</div>
		</div>
	);
};
