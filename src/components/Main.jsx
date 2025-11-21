import Card from './Card'

export default function Main({ dataSort, setShop }) {
	return (
		<main className='font-display'>
			<div className='container'>
				<ul className='grid grid-cols-4 gap-15 justify-items-center-safe'>
					{!(dataSort.length === 0) ? (
						dataSort.map(el => (
							<Card
								key={el.id}
								id={el.id}
								name={el.name}
								description={el.description}
								price={el.price}
								image={el.image}
								setShop={setShop}
							/>
						))
					) : (
						<p>Not Position</p>
					)}
				</ul>
			</div>
		</main>
	)
}
