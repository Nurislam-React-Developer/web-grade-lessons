import Button from '@/components/Button';

const AboutPage = () => {
  const lustUpdated = new Date().toISOString()
	return (
		<div className='p-8 bg-blue-200'>
			<h1 className='text-2xl font-bold'>About Page</h1>
			<p className='mt-4'>This is the about page.</p>
			<div>
				<p>
          Последнее обновление: {lustUpdated}
				</p>
        <Button>Click Me</Button>
			</div>
		</div>
	);
};

export default AboutPage;
