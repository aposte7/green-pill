import JoinUS from '@/components/join-us'
import { ArrowRight, Camera } from 'lucide-react'
import Image from 'next/image'

function page() {
	return (
		<>
			<section className="h-fit">
				<div className="bg-gradient-primary space-y-6  py-10 text-center text-primary-foreground h-2/3">
					<span className="h-16 mx-auto bg-secondary/30 w-16 flex items-center justify-center rounded-full">
						<Camera size={35} />
					</span>

					<h1 className="text-6xl font-bold">Training Gallery</h1>

					<p className="text-xl w-full mx-auto max-w-4xl text-primary-foreground/90">
						Moments from our Green Pill internship program -
						capturing the journey of growth, collaboration, and
						skill development across different locations.
					</p>

					<button className="px-8 transition-all group hover:scale-105 py-2 duration-300 hover:bg-primary-foreground/40 border mt-8 border-border/30 bg-primary-foreground/20 inline-flex items-center gap-4 rounded-md">
						Join Our Program
						<ArrowRight
							size={18}
							className="text-inherit duration-200 group-hover:translate-x-2"
						/>
					</button>
				</div>

				<div className="flex flex-wrap items-center py-15 justify-evenly gap-4">
					<div>
						<p className="text-2xl sm:text-3xl mb-2 text-center font-bold">
							500+
						</p>
						<p className="text-muted-foreground">
							Participants Trained
						</p>
					</div>
					<div>
						<p className="text-2xl sm:text-3xl mb-2 text-center font-bold">
							50+
						</p>
						<p className="text-muted-foreground">
							Training Sessions
						</p>
					</div>
					<div>
						<p className="text-2xl sm:text-3xl mb-2 text-center font-bold">
							3
						</p>
						<p className="text-muted-foreground">Total Cohort</p>
					</div>
					<div>
						<p className="text-2xl sm:text-3xl mb-2 text-center font-bold">
							2
						</p>
						<p className="text-muted-foreground">Years Running</p>
					</div>
				</div>
			</section>

			<section className="py-20 text-center bg-secondary">
				<h2 className="text-5xl mb-7 font-bold">
					Our Training Journey
				</h2>
				<p className="sm:text-lg mx-auto max-w-3xl md:text-xl text-muted-foreground">
					From problem-solving workshops to team dynamics training,
					witness the transformative moments of our Green Pill
					internship program.
				</p>

				<div
					id="training-grid"
					className="mt-20 h-screen overflow-y-scroll"
				>
					<div className="mx-auto grid h-[200rem] max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-y-clip gap-y-8">
						<div className="flex flex-col column-reverse">
							{['4', '2', '6', '1', '5', '3'].map((num) => (
								<figure
									key={num}
									className="w-full  h-[32rem] px-4 sm:px-6 lg:px-[7vh] rounded-xl overflow-clip"
								>
									<Image
										src={`/img/green-${num}.jpg`}
										width={400}
										height={400}
										alt={`Green Pill Training Session ${num}`}
										className="h-[90%] w-full rounded-xl object-cover object-top"
									/>
									<figcaption className="mt-2 text-center text-sm text-muted-foreground">
										Green Pill Training Session {num}
									</figcaption>
								</figure>
							))}
						</div>

						<div className="flex flex-col">
							{['3', '5', '1', '6', '2', '4'].map((num) => (
								<figure
									key={num}
									className="w-full  h-[32rem] px-4 sm:px-6 lg:px-[7vh] rounded-xl overflow-clip"
								>
									<Image
										src={`/img/green-${num}.jpg`}
										width={400}
										height={400}
										alt={`Green Pill Training Session ${num}`}
										className="h-[90%] w-full rounded-xl object-cover object-top"
									/>
									<figcaption className="mt-2 text-center text-sm text-muted-foreground">
										Green Pill Training Session {num}
									</figcaption>
								</figure>
							))}
						</div>

						<div className="flex flex-col column-reverse">
							{['5', '1', '6', '2', '3', '4'].map((num) => (
								<figure
									key={num}
									className="w-full  h-[32rem] px-4 sm:px-6 lg:px-[7vh] rounded-xl overflow-clip"
								>
									<Image
										src={`/img/green-${num}.jpg`}
										width={400}
										height={400}
										alt={`Green Pill Training Session ${num}`}
										className="h-[90%] w-full rounded-xl object-cover object-top"
									/>
									<figcaption className="mt-2 text-center text-sm text-muted-foreground">
										Green Pill Training Session {num}
									</figcaption>
								</figure>
							))}
						</div>
					</div>
				</div>
			</section>

			<JoinUS />
		</>
	)
}

export default page
