import Card from './components/Card'
import data from './data'

function App() {
	return (
		<main className='font-display'>
			<div className='container'>
				<ul className='grid grid-cols-4 gap-15'>
					{data.map(el => (
						<Card
							id={el.id}
							name={el.name}
							description={el.description}
							price={el.price}
							image={el.image}
						/>
					))}
				</ul>
			</div>
		</main>
	)
}

export default App
