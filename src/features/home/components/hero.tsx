import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Hero() {
	return (
		<section className="relative min-h-screen py-10">
			<div className="absolute inset-0">
				<Image
					width={200}
					height={200}
					priority={true}
					src="/hero.jpg"
					alt="Professional collaboration and growth"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-transparent"></div>
			</div>

			<div className="relative z-10 container xl:max-w-[85rem]  mx-auto xl:px-6 px-4">
				<div className="max-w-3xl">
					<div className="animate-fade-in-up">
						<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.28]">
							Transform Your
							<span className="block h-fit z-20 bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
								Problem-Solving
							</span>
							Skills
						</h1>

						<p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
							Join Green Pill&apos;s comprehensive training
							programs and evolve from a problem-solver to an
							innovative leader. Master methodologies that drive
							real change.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 mb-12">
							<button
								className="group bg-gradient-primary py-3 px-6 rounded-sm inline-flex text-lg text-primary-foreground hover:scale-105 transition-transform 
                            duration-300
                            items-center "
							>
								Explore Programs
								<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
							</button>
						</div>

						<div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/20">
							<div className="">
								<div className="text-3xl font-bold text-white mb-2">
									300+
								</div>
								<div className="text-gray-300">
									Professionals Trained
								</div>
							</div>
							<div className="">
								<div className="text-3xl font-bold text-white mb-2">
									9+
								</div>
								<div className="text-gray-300">
									Weeks for Training
								</div>
							</div>
							<div className="col-span-2 md:col-span-1">
								<div className="text-3xl font-bold text-white mb-2">
									5+
								</div>
								<div className="text-gray-300">
									Training Programs
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
