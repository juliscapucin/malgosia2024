export default function Subtitle({ children }: { children: React.ReactNode }) {
	return (
		<p className='text-titleSmall md:text-titleMedium lg:text-titleLarge mb-16'>
			{children}
		</p>
	)
}
