export default function Title({ children }: { children: React.ReactNode }) {
	return (
		<h1 className='text-displaySmall md:text-displayMedium lg:text-displayLarge'>
			{children}
		</h1>
	)
}
