import { Lightbulb, Target, TrendingUp, Users } from 'lucide-react'

function AboutUs() {
	return (
		<section className="bg-secondary py-25 text-secondary-foreground ">
			<h2 className="mx-auto font-bold w-fit text-4xl">
				About Green Pill
			</h2>

			<p className="text-muted-foreground max-w-3xl text-xl text-center mx-auto py-8 text">
				Green Pill is more than just a training organization. We&apos;re
				catalysts for transformation, helping professionals evolve their
				problem-solving capabilities and embrace the challenges of
				tomorrow.
			</p>

			<div className="grid  min-[70rem]:grid-cols-4 py-8 gap-6 sm:grid-cols-2 px-8">
				<div className="bg-card text-card-foreground gap-3 p-6 border flex flex-col items-center border-border rounded-lg">
					<div className="flex p-3.5 w-fit justify-center items-center rounded-full bg-gradient-primary text-primary-foreground">
						<Target size={30} />
					</div>

					<h3 className="text-xl font-medium">Problem-Focused</h3>

					<p className="text-muted-foreground text-center">
						We believe entrepreneurship equals loving to solve
						problems. Every challenge is an opportunity for growth.
					</p>
				</div>
				<div className="bg-card text-card-foreground gap-3 p-6 border flex flex-col items-center border-border rounded-lg">
					<div className="flex p-3.5 w-fit justify-center items-center rounded-full bg-gradient-primary text-primary-foreground">
						<Users size={30} />
					</div>

					<h3 className="text-xl font-medium">Team Dynamics</h3>

					<p className="text-muted-foreground text-center">
						Understanding team formation phases and roles -
						builders, thinkers, and connectors working in harmony.
					</p>
				</div>
				<div className="bg-card text-card-foreground gap-3 p-6 border flex flex-col items-center border-border rounded-lg">
					<div className="flex p-3.5 w-fit justify-center items-center rounded-full bg-gradient-primary text-primary-foreground">
						<Lightbulb size={30} />
					</div>

					<h3 className="text-xl font-medium">Innovative Methods</h3>

					<p className="text-muted-foreground text-center">
						Teaching proven methodologies like 5 Whys and persona
						mapping to tackle complex challenges.
					</p>
				</div>
				<div className="bg-card text-card-foreground gap-3 p-6 border flex flex-col items-center border-border rounded-lg">
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
		</section>
	)
}

export default AboutUs
