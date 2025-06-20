'use client';

interface ButtonProps {
	children: string;
}

const Button = ({ children }: ButtonProps) => {
	return (
		<button
			onClick={() => alert('Hello!')}
			className='bg-blue-500 transition-all hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
		>
			{children}
		</button>
	);
};
export default Button;
