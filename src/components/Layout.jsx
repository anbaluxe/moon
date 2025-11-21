import Header from './Header'
import Main from './Main'

export default function Layout({ shop, setShop, dataSort, setDataSort, data }) {
	return (
		<>
			<Header shop={shop} setDataSort={setDataSort} data={data} />
			<Main dataSort={dataSort} setShop={setShop} />
		</>
	)
}
