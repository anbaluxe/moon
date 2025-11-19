import Button from './Button'

export default function Card({ id, name, description, price, image }) {
	return (
		<li className='w-60 flex flex-col gap-2' key={id}>
			<img className={'w-60'} src={image} alt={name} />
			<h4 className='font-extrabold'>{name}</h4>
			<p className='font-extrabold'>${price}.00</p>
			<p>{description}</p>
			<Button />
		</li>
	)
}
