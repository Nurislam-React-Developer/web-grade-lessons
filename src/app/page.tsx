import Link from 'next/link';

export default function Home() {
	return (
		<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
			<h1 className='text-3xl font-bold'>Мое первое приложение на Next.js</h1>

			<Link
				href='/about'
				className='group relative inline-block px-6 py-4 text-white font-semibold uppercase tracking-wider bg-transparent border border-white/30 rounded-xl backdrop-blur-md overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 active:shadow-inner shadow-lg'
				style={{
					backgroundImage:
						"url('https://xpertlab.com/wp-content/uploads/2024/05/3-1.jpg')", // <-- Твоя текстура
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<span className='relative z-10'>Перейти на страницу о нас</span>

				<span className='absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500'></span>

				<span className='absolute -left-2 -top-2 w-16 h-16 bg-white/20 rounded-full blur-sm transform -translate-x-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-60 transition-opacity duration-500'></span>

				<span className='absolute -bottom-2 -right-2 w-12 h-12 bg-white/10 rounded-full blur-sm transform translate-x-1/2 translate-y-1/2 opacity-20 group-hover:opacity-50 transition-opacity duration-500'></span>
			</Link>

			<Link
				href='/dashboard'
				className='group relative inline-block px-6 py-4 text-indigo-900 font-semibold uppercase tracking-wider bg-transparent border border-indigo-300/40 rounded-lg backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-inner'
				style={{
					backgroundImage:
						"url('https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75')", // <-- замени на свою
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<span className='relative z-10'>Перейти в панель управления</span>

				<span className='absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-200/20 opacity-0 group-hover:opacity-70 transition-opacity duration-500'></span>

				<span className='absolute inset-x-0 top-[-100%] h-12 bg-gradient-to-b from-white/40 to-transparent opacity-30 group-hover:top-full transition-all duration-1000 ease-in-out'></span>
			</Link>
		</div>
	);
}
