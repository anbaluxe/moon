import { useEffect, useState } from 'react'
import Card from './components/Card'
import data from './data'
import Header from './pages/Header'

function App() {
	const [shop, setShop] = useState(null)
	const [search, setSearch] = useState('')
	const [dataSort, setDataSort] = useState(data)
	useEffect(() => {
		function sortData() {
			if (search) {
				const result = data.filter(el =>
					el.name.toLowerCase().includes(search.toLowerCase())
				)
				setDataSort(result)
			}
		}
		sortData()
		if (!search) {
			setDataSort(data)
		}
	}, [search])

	return (
		<>
			<Header shop={shop} setSearch={setSearch} search={search} />
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
		</>
	)
}

export default App
