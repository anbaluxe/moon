import NavMenu from '../components/NavMenu'

export default function Header({ shop, setSearch, search }) {
	return (
		<header>
			<div className='container'>
				<div className='flex justify-between items-center'>
					<img src='moon/header/logo.png' alt='Logo' className='w-44 h-12' />
					<NavMenu />
					<input
						type='text'
						value={search}
						placeholder='Search item'
						onChange={e => setSearch(e.target.value)}
					/>
					<div className='flex justify-between gap-5'>
						<a href='#' className='w-6 h-6'>
							<img src='moon/header/header_button/Heart.png' alt='Heart' />
						</a>
						<span className='w-6 h-6 relative'>
							{shop && (
								<div className='bg-red-500 w-6 h-6 rounded-xl text-white text-center absolute -top-3 left-3'>
									{shop}
								</div>
							)}
							<a href='#'>
								<img
									src='moon/header/header_button/Shopping_cart.png'
									alt='Shopping cart'
								/>
							</a>
						</span>
						<a href='#' className='w-6 h-6'>
							<img src='moon/public/header/header_button/User.png' alt='User' />
						</a>
					</div>
				</div>
			</div>
			<hr />
		</header>
	)
}
