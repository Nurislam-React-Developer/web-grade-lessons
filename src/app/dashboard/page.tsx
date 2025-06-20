'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const DashBoardPage = () => {
	const [name, setName] = useState('');
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerHeight);
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='p-8'>
			<h1 className='text-2xl font-bold'>Панел пользователя</h1>
			<div className='mt-6 space-y-4'>
				<div className='p-4 bg-blue-100 rounded'>
					<label className='block mb-2'>Введите Ваше имя:</label>
					<input
						className='p-2 border rounded'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<p className='mt-2'>Привет, {name || 'гость'}!</p>
				</div>
				<div className='p-4 bg-green-500 rounded'>
					<p className=''>Ширина окна: {windowWidth}</p>
				</div>
				<Link href={'/'} className='w-[120px] h-[20px] bg-emerald-500'>
					На главную страницу
				</Link>
			</div>
		</div>
	);
};

export default DashBoardPage;
