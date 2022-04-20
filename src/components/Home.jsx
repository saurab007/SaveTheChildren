/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withRouter } from 'react-router-dom';
import Nav from './Nav';

function Home() {
	return (
		<div>
			<Nav />
			<div
				className='w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10'
				style={{
					backgroundImage: `url("https://poeticponderings.files.wordpress.com/2013/11/children-on-steps.jpg")`,
				}}>
				<div className='container max-w-4xl mx-auto text-center'>
					<h1 className='text-xl leading-tight md:text-3xl text-center text-gray-100 mb-3'>
						We try to help street children
					</h1>
					<p className='text-md md:text-lg text-center text-white '>
						By fulfilling their basic needs
					</p>

					<a
						href='/register'
						className='mt-6 inline-block bg-white text-black no-underline px-4 py-3 shadow-lg'>
						Find out more
					</a>
				</div>
			</div>

			<div className='w-full px-6 py-12 bg-white'>
				<div className='container max-w-4xl mx-auto text-center pb-10'>
					<h3 className='text-xl md:text-3xl leading-tight text-center max-w-md mx-auto text-gray-900 mb-12'>
						Join your hands with us in providing the street children good and
						better life.
					</h3>

					<a href='#' className='bg-black text-white px-4 py-3 no-underline'>
						Donate
					</a>
				</div>

				<div className='container max-w-4xl mx-auto text-center flex flex-wrap items-start md:flex-no-wrap'>
					<div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>
						<img
							src='https://media.istockphoto.com/vectors/homeless-sad-poor-person-young-children-kids-beggars-wearing-dirty-vector-id1163661679?k=20&m=1163661679&s=612x612&w=0&h=7aFJ0nGIil84v_lHxp_QPKfnC24r2MKWwapvdjdhNNc='
							className='w-full h-64 object-cover mb-6'
							alt='a'
						/>

						<h2 className='text-xl leading-tight mb-2'>
							We help and support them
						</h2>
						<p className='mt-3 mx-auto text-sm leading-normal'>
							We help them and support them in their life. we help them to fight
							from social problems.
						</p>
					</div>

					<div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>
						<img
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9jw2W8bn47r07lHFGklQ_WjJFTXKt0Q_mg&usqp=CAU'
							className='w-full h-64 object-cover mb-6'
							alt='a'
						/>

						<h2 className='text-xl leading-tight mb-2'>We take care of them</h2>
						<p className='mt-3 mx-auto text-sm leading-normal'>
							We take care of them by providing good food ,clothes and
							education.
						</p>
					</div>

					<div className='my-4 w-full md:w-1/3 flex flex-col items-center justify-center px-4'>
						<img
							src='https://i.guim.co.uk/img/media/c2b110bddfeddc669bef5843d23ae2b2a5d3e6bf/0_282_5315_3189/master/5315.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a402928f0587f7ef0c25a214ecca92cc'
							className='w-full h-64 object-cover mb-6'
							alt='a'
						/>

						<h2 className='text-xl leading-tight mb-2'>
							We provide them healthy food and good quality food
						</h2>
						<p className='mt-3 mx-auto text-sm leading-normal'>
							Nutritious food help them to survive in the street.
						</p>
					</div>
				</div>
			</div>
			<footer className='w-full bg-white px-6 border-t'>
				<div className='container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm'>
					&copy;2022 My company. All rights reserved.
					<div className='pt-4 md:p-0 text-center md:text-right text-xs'>
						<a className='text-black no-underline hover:underline'>
							Privacy Policy
						</a>
						<a className='text-black no-underline hover:underline ml-4'>
							Terms &amp; Conditions
						</a>
						<a className='text-black no-underline hover:underline ml-4'>
							Contact Us
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default withRouter(Home);
