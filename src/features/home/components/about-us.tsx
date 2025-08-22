import { Lightbulb, Target, TrendingUp, Users } from 'lucide-react'

function AboutUs() {
	return (
		<section
			id="about"
			className="bg-secondary space-y-16 px-8 py-20 text-secondary-foreground "
		>
			<div>
				<h2 className="mx-auto mb-6 font-bold w-fit text-4xl">
					About Green Pill
				</h2>

				<p className="text-muted-foreground max-w-3xl text-xl text-center mx-auto  text">
					Green Pill is more than just a training organization.
					We&apos;re catalysts for transformation, helping
					professionals evolve their problem-solving capabilities and
					embrace the challenges of tomorrow.
				</p>
			</div>

			<div className="grid  min-[70rem]:grid-cols-4  gap-6 sm:grid-cols-2 ">
				<div className="bg-card text-card-foreground gap-3 p-6 border flex flex-col items-center border-border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/40">
					<div className="flex p-3.5 w-fit justify-center items-center rounded-full bg-gradient-primary text-primary-foreground">
						<Target size={30} />
					</div>

					<h3 className="text-xl font-medium">Problem-Focused</h3>

					<p className="text-muted-foreground text-center">
						We believe entrepreneurship equals loving to solve
						problems. Every challenge is an opportunity for growth.
					</p>
				</div>
				<div className="bg-card text-card-foreground gap-3 p-6 border flex flex-col items-center border-border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/40">
					<div className="flex p-3.5 w-fit justify-center items-center rounded-full bg-gradient-primary text-primary-foreground">
						<Users size={30} />
					</div>

					<h3 className="text-xl font-medium">Team Dynamics</h3>

					<p className="text-muted-foreground text-center">
						Understanding team formation phases and roles -
						builders, thinkers, and connectors working in harmony.
					</p>
				</div>
				<div className="bg-card text-card-foreground gap-3 p-6 border flex flex-col items-center border-border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/40">
					<div className="flex p-3.5 w-fit justify-center items-center rounded-full bg-gradient-primary text-primary-foreground">
						<Lightbulb size={30} />
					</div>

					<h3 className="text-xl font-medium">Innovative Methods</h3>

					<p className="text-muted-foreground text-center">
						Teaching proven methodologies like 5 Whys and persona
						mapping to tackle complex challenges.
					</p>
				</div>
				<div className="bg-card text-card-foreground gap-3 p-6 border flex flex-col items-center border-border rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/40">
					<div className="flex p-3.5 w-fit justify-center items-center rounded-full bg-gradient-primary text-primary-foreground">
						<TrendingUp size={30} />
					</div>

					<h3 className="text-xl font-medium">
						Continuous Evolution
					</h3>

					<p className="text-muted-foreground text-center">
						From fire and wheel to AI - we help you evolve with
						technology and society&apos;s changing demands.
					</p>
				</div>
			</div>

			<div className="bg-card rounded-xl p-8 md:p-12 shadow-elegant">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<h3 className="text-3xl font-bold text-foreground mb-6">
							Our Mission
						</h3>
						<p className="text-muted-foreground mb-6 leading-relaxed">
							We empower individuals and teams to become
							future-ready problem solvers. Through our
							comprehensive training programs, we address the
							critical gap between current skills and evolving
							challenges.
						</p>
						<p className="text-muted-foreground leading-relaxed">
							From the early innovators who gave us fire and the
							wheel, to modern engineers driving the Industrial
							Revolution, to today&apos;s tech pioneers -
							evolution has always been key to solving
							humanity&apos;s greatest challenges.
						</p>
					</div>
					<div className="space-y-6">
						<div className="flex items-start space-x-4">
							<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<span className="text-white font-bold text-sm">
									1
								</span>
							</div>
							<div>
								<h4 className="font-semibold text-foreground mb-2">
									Identify Challenge
								</h4>
								<p className="text-muted-foreground">
									Every great solution starts with
									understanding the real problem.
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<span className="text-white font-bold text-sm">
									2
								</span>
							</div>
							<div>
								<h4 className="font-semibold text-foreground mb-2">
									Apply Methodology
								</h4>
								<p className="text-muted-foreground">
									Use proven frameworks and tools to
									systematically address issues.
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<span className="text-white font-bold text-sm">
									3
								</span>
							</div>
							<div>
								<h4 className="font-semibold text-foreground mb-2">
									Evolve & Adapt
								</h4>
								<p className="text-muted-foreground">
									Continuously grow your skills to meet
									tomorrow&apos;s challenges.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
