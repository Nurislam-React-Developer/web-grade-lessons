import Button from '@/components/Button';
import Link from 'next/link';

const AboutPage = () => {
	const lustUpdated = new Date().toISOString();
	return (
		<div className='p-8 bg-blue-200'>
			<h1 className='text-2xl font-bold'>About Page</h1>
			<p className='mt-4'>This is the about page.</p>
			<div>
				<p>Последнее обновление: {lustUpdated}</p>
				<Button>Click Me</Button>
				<Link href={'/'} className='w-[120px] h-[20px] bg-emerald-500'>
					На главную страницу
				</Link>
			</div>
		</div>
	);
};

export default AboutPage;
