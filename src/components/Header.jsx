import NavMenu from './NavMenu'

export default function Header({ shop, setDataSort, data }) {
	return (
		<header>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<img src='header/logo.png' alt='Logo' className='w-44 h-12' />
					<NavMenu />
					<input
						type='text'
						placeholder='Search item'
						onChange={e => {
							setDataSort(() => {
								if (e.target.value) {
									const result = data.filter(el =>
										el.name.toLowerCase().includes(e.target.value.toLowerCase())
									)
									return result
								}
								if (!e.target.value) {
									return data
								}
							})
						}}
					/>
					<div className='flex justify-between gap-5'>
						<a href='#' className='w-6 h-6'>
							<img src='header/header_button/Heart.png' alt='Heart' />
						</a>
						<span className='w-6 h-6 relative'>
							{shop && (
								<div className='bg-red-500 w-6 h-6 rounded-xl text-white text-center absolute -top-3 left-3'>
									{shop}
								</div>
							)}
							<a href='#'>
								<img
									src='header/header_button/Shopping_cart.png'
									alt='Shopping cart'
								/>
							</a>
						</span>
						<a href='#' className='w-6 h-6'>
							<img src='header/header_button/User.png' alt='User' />
						</a>
					</div>
				</div>
			</div>
			<hr />
		</header>
	)
}
