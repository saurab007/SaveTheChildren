import React from 'react';

export const ChildCard = ({ name, age, image, address, description }) => {
	return (
		<div>
			<div className='flex flex-col gap-5 items-center bg-white mt-10'>
				<card class='border-gray-300 border-2 rounded-xl w-[65%] py-7 px-5'>
					<div class='grid grid-cols-6 gap-3'>
						<div class='col-span-2'>
							<img src={image} alt={name} width={150} height={150} />
						</div>

						<div class='col-span-4'>
							<p class='text-gray-700 font-bold'> {name.toUpperCase()}</p>
							<div class='text-gray-500 mt-4 text-base flex flex-row gap-10'>
								<p>
									<span className='text-black'>Address: </span>
									{address}
								</p>
								<p>
									<span className='text-black'>Age: </span>
									{age}
								</p>
							</div>
							<p className='text-sm text-gray-500 mt-2'>
								<span className='text-black'>Description: </span>
								{description}
							</p>
						</div>
					</div>
				</card>
			</div>
		</div>
	);
};
