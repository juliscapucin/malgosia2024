"use client"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Button,
	Subtitle,
	Title,
} from "@/components/ui"

const accordionItems = [
	{
		id: "item-1",
		question: "Is it accessible?",
		answer: "Yes. It adheres to the WAI-ARIA design pattern.",
	},
	{
		id: "item-2",
		question: "Is it styled?",
		answer:
			"Yes. It comes with default styles that matches the other components' aesthetic.",
	},
	{
		id: "item-3",
		question: "Is it animated?",
		answer:
			"Yes. It's animated by default, but you can disable it if you prefer.",
	},
]

export default function AccordionDemo() {
	return (
		<>
			<Title>Accordion</Title>
			<Subtitle>
				A vertically stacked set of interactive headings that each reveal a
				section of content.
			</Subtitle>
			<section className='max-w-prose'>
				<Accordion type='single' collapsible className='w-full'>
					{accordionItems.map((item) => (
						<AccordionItem value={item.id} key={item.id}>
							<AccordionTrigger>{item.question}</AccordionTrigger>
							<AccordionContent>{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</section>
			<Button className='mt-16'>Button</Button>
			<section className='mt-16'>
				<div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center'>
					<div className='relative w-full h-64 bg-white rounded-lg shadow-lg overflow-hidde mb-32'>
						<div className='absolute inset-0 rounded-lg overflow-hidden bg-red-200'>
							<img
								src='https://images.unsplash.com/photo-1543794327-59a91fb815d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=200&q=80'
								alt=''
							/>
							<div className='absolute inset-0 backdrop backdrop-blur-10 bg-gradient-to-b from-transparent to-black'></div>
						</div>
						<div className='absolute flex space-x-6 transform translate-x-6 translate-y-8'>
							<div className='w-36 h-36 rounded-lg shadow-lg overflow-hidden'>
								<img
									src='https://images.unsplash.com/photo-1543794327-59a91fb815d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80'
									alt=''
								/>
							</div>
							<div className='text-white pt-12'>
								<h3 className='font-bold'>Album</h3>
								<div className='text-bodySmall opacity-60'>Super Interpret</div>
								<div className='mt-8 text-gray-400'>
									<div className='flex items-center space-x-2 text-bodySmall'>
										<svg
											className='w-4 h-4'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										>
											<path d='M3 18v-6a9 9 0 0 1 18 0v6'></path>
											<path d='M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z'></path>
										</svg>
										<span>Easy listening</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='w-1/2 bg-white rounded-lg shadow-lg overflow-hidden'>
						<div className='relative'>
							<img
								src='https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&h=250&q=80'
								className='object-cover'
							/>
							<div className='absolute p-4 inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-gray-900 backdrop backdrop-blur-5 text-white'>
								<h3 className='font-bold'>Super Artist</h3>
								<span className='opacity-70'>Albumtitle</span>
							</div>
						</div>
						<div>
							<div className='relative h-1 bg-gray-200'>
								<div className='absolute h-full w-1/2 bg-green-500 flex items-center justify-end'>
									<div className='rounded-full w-3 h-3 bg-white shadow'></div>
								</div>
							</div>
						</div>
						<div className='flex justify-between font-semibold text-gray-500 px-4 py-2'>
							<div>1:50</div>
							<div className='flex space-x-3 p-2'>
								<button className='focus:outline-none'>
									<svg
										className='w-4 h-4'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<polygon points='19 20 9 12 19 4 19 20'></polygon>
										<line x1='5' y1='19' x2='5' y2='5'></line>
									</svg>
								</button>
								<button className='rounded-full w-8 h-8 flex items-center justify-center pl-0.5 ring-2 ring-gray-100 focus:outline-none'>
									<svg
										className='w-5 h-5'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<polygon points='5 3 19 12 5 21 5 3'></polygon>
									</svg>
								</button>
								<button className='focus:outline-none'>
									<svg
										className='w-4 h-4'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<polygon points='5 4 15 12 5 20 5 4'></polygon>
										<line x1='19' y1='5' x2='19' y2='19'></line>
									</svg>
								</button>
							</div>
							<div>3:00</div>
						</div>
						<ul className='text-bodySmall sm:text-base divide-y border-t cursor-default'>
							<li className='flex items-center space-x-3 hover:bg-gray-100'>
								<button className='p-3 hover:bg-green-500 group focus:outline-none'>
									<svg
										className='w-4 h-4 group-hover:text-white'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<polygon points='5 3 19 12 5 21 5 3'></polygon>
									</svg>
								</button>
								<div className='text-bodySmall flex-1'>Artist - Title</div>
								<div className='text-bodySmall text-gray-400'>2:58</div>
								<button className='focus:outline-none pr-4 group'>
									<svg
										className='w-4 h-4 group-hover:text-green-600'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<path d='M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5' />
									</svg>
								</button>
							</li>
							<li className='flex items-center space-x-3 hover:bg-gray-100'>
								<button className='p-3 hover:bg-green-500 group focus:outline-none'>
									<svg
										className='w-4 h-4 group-hover:text-white'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<polygon points='5 3 19 12 5 21 5 3'></polygon>
									</svg>
								</button>
								<div className='text-bodySmall flex-1'>Artist - Title</div>
								<div className='text-bodySmall text-gray-400'>2:58</div>
								<button className='focus:outline-none pr-4 group'>
									<svg
										className='w-4 h-4 group-hover:text-green-600'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'
									>
										<path d='M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5' />
									</svg>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
