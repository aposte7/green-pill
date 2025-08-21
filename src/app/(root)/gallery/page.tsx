import { ArrowRight, Camera } from 'lucide-react'
import Image from 'next/image'

function page() {
	return (
		<>
			<section className="h-[91.5dvh]">
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

				<div className="flex items-center py-15 justify-evenly gap-8">
					<div>
						<p className="text-3xl mb-2 text-center font-bold">
							500+
						</p>
						<p className="text-muted-foreground">
							Participants Trained
						</p>
					</div>
					<div>
						<p className="text-3xl mb-2 text-center font-bold">
							50+
						</p>
						<p className="text-muted-foreground">
							Training Sessions
						</p>
					</div>
					<div>
						<p className="text-3xl mb-2 text-center font-bold">3</p>
						<p className="text-muted-foreground">Total Cohort</p>
					</div>
					<div>
						<p className="text-3xl mb-2 text-center font-bold">2</p>
						<p className="text-muted-foreground">Years Running</p>
					</div>
				</div>
			</section>

			<section className="py-25 text-center bg-secondary">
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
					className="h-screen mt-20 overflow-y-scroll"
				>
					<div className="grid h-[200rem] overflow-y-clip lg:max-w-7xl mx-auto  grid-cols-3 ">
						<div className="flex column-reverse flex-col ">
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-4.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 4
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-2.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 2
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-6.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 6
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-1.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 1
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-5.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 5
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-3.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 3
								</figcaption>
							</figure>
						</div>
						<div className="flex flex-col ">
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-3.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 3
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-5.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 5
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-1.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 1
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-6.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 6
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-2.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 2
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-4.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 4
								</figcaption>
							</figure>
						</div>
						<div className="flex column-reverse flex-col ">
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-5.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 5
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-1.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 1
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-6.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 6
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-2.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 2
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-3.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 3
								</figcaption>
							</figure>
							<figure className="h-[32rem] px-[7vh] rounded-xl overflow-clip  w-full">
								<Image
									src="/img/green-4.jpg"
									width={400}
									height={400}
									alt="session image"
									className="w-full h-[90%] rounded-xl object-top-left object-cover"
								/>
								<figcaption className="text-center mt-2 text-sm text-muted-foreground">
									Green Pill Training Session 4
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default page
