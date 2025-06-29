'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
	const [countdown, setCountdown] = useState(5);
	const [textScale, setTextScale] = useState(1); // Масштаб текста

	// Обновляем обратный отсчёт и масштаб текста
	useEffect(() => {
		const timer = setInterval(() => {
			setCountdown((prev) => prev - 1);

			// Уменьшаем масштаб текста
			if (textScale > 0.1) {
				setTextScale((prev) => prev - 0.1);
			}
		}, 1000);

		// Редирект через 5 секунд
		if (countdown <= 0) {
			clearInterval(timer);
			window.location.href = '/';
		}

		return () => clearInterval(timer);
	}, [countdown, textScale]);

	return (
		<div className='min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden'>
			{/* Фоновая текстура черной дыры */}
			<div
				className='absolute inset-0 bg-cover bg-center'
				style={{
					backgroundImage:
						"url('https://source.unsplash.com/random/1600x900/?black-hole')",
				}}
			></div>

			{/* Черная дыра */}
			<svg
				className='absolute inset-0 w-full h-full'
				viewBox='0 0 100 100'
				preserveAspectRatio='xMidYMid slice'
			>
				<defs>
					<radialGradient id='blackHoleGradient' cx='50%' cy='50%' r='50%'>
						<stop offset='0%' stopColor='#fff' />
						<stop offset='100%' stopColor='#000' />
					</radialGradient>
				</defs>
				<circle cx='50%' cy='50%' r='40%' fill='url(#blackHoleGradient)' />
			</svg>

			{/* Главный контент */}
			<div
				className='relative z-10 text-center transition-all duration-1000 ease-in-out'
				style={{
					transform: `scale(${textScale})`,
				}}
			>
				<h1 className='text-8xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500'>
					404
				</h1>
				<p className='text-3xl md:text-4xl font-bold mb-6'>
					The page you're looking for has been swallowed by a black hole.
				</p>
				<p className='text-xl mb-8'>
					Don't worry — we'll send you back to safety in{' '}
					<span className='font-bold text-yellow-400'>{countdown}</span>{' '}
					seconds.
				</p>

				<Link
					href='/'
					className='inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105'
				>
					Go Home 🚀
				</Link>
			</div>

			{/* Подпись внизу */}
			<footer className='mt-12 text-sm text-gray-400'>
				&copy; {new Date().getFullYear()} YourAwesomeSite. All rights reserved.
			</footer>
		</div>
	);
}
