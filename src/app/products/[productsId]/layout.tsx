export default function ProductsDetailsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='bg-sky-600'>
      <aside>
        <h3>Рекомендуемые товары</h3>
      </aside>
			<h2>Все продукты</h2>
			<main>{children}</main>
		</div>
	);
}
