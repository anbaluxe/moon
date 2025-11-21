export default function Button({ setShop }) {
	return (
		<button
			className='border-2 w-60 h-10 font-extrabold hover:bg-black hover:text-white'
			onClick={() => setShop(prev => (prev += 1))}
		>
			Add To Card
		</button>
	)
}
