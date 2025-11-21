import { useState } from 'react'
import Layout from './components/Layout'
import data from './data'

function App() {
	const [shop, setShop] = useState(null)
	const [dataSort, setDataSort] = useState(data)

	return (
		<>
			<Layout
				dataSort={dataSort}
				shop={shop}
				setShop={setShop}
				setDataSort={setDataSort}
				data={data}
			/>
		</>
	)
}

export default App
