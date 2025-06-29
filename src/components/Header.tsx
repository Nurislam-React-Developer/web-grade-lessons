
export const Header = () => {
  return ( 
    <div>
      <h1 className='text-2xl font-bold'>My Website</h1>
      <nav className='mt-4'>
        <ul className='flex space-x-4'>
          <li><a href="/" className='text-blue-500 hover:underline'>Home</a></li>
          <li><a href="/about" className='text-blue-500 hover:underline'>About</a></li>
          <li><a href="/contact" className='text-blue-500 hover:underline'>Contact</a></li>
          <li><a href='/products' className='text-blue-500 hover:underline'>Products</a></li>
        </ul>
      </nav>
    </div>
  );
}