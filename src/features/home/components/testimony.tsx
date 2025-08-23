import React from 'react'

type Testimonial = {
	name: string
	role: string
	quote: string
}

const testimonials: Testimonial[] = [
	{
		name: 'Meron Bekele',
		role: 'Software Engineer · Addis Ababa',
		quote: 'Green Pill turned fuzzy problems into testable hypotheses. Our team now gets to root causes fast and ships solutions that actually move the metrics.',
	},
	{
		name: 'Abel Tadesse',
		role: 'Product Designer · Fintech',
		quote: 'Design thinking with real Ethiopian users changed everything. Field interviews in Addis helped us simplify onboarding and cut drop‑offs by half.',
	},
	{
		name: 'Hanna Gebremedhin',
		role: 'Operations Lead · EdTech',
		quote: 'The 5 Whys + prioritization matrix helped us fix bottlenecks with limited resources. We reduced response time from days to hours.',
	},
	{
		name: 'Yohannes Tesfaye',
		role: 'Founder · Agritech, Bahir Dar',
		quote: 'We validated our idea with smallholder farmers before building. The training saved months of guesswork and focused us on real needs.',
	},
	{
		name: 'Lulit Alemu',
		role: 'CS Student · AAU',
		quote: 'I built a portfolio with real projects and practical frameworks. The mentorship made me internship‑ready in one semester.',
	},
	{
		name: 'Dawit Mekonnen',
		role: 'Program Manager · NGO',
		quote: 'Outcome mapping and simple dashboards helped our team track impact clearly. Stakeholders finally see progress at a glance.',
	},
]

const getInitials = (name: string) =>
	name
		.split(' ')
		.filter(Boolean)
		.slice(0, 2)
		.map((n) => n[0]?.toUpperCase())
		.join('')

const delay = Number((60 / testimonials.length).toFixed(0))
function Testimony() {
	return (
		<section className="py-20  px-8 bg-background">
			<div className="max-w-xl mx-auto mb-5 text-center">
				<h3 className="text-5xl font-bold mb-5">Success Stories</h3>
				<p className="text-muted-foreground text-lg">
					Hear from professionals who transformed their careers
					through our training programs.
				</p>
			</div>

			<div className="w-full overflow-hidden relative mt-15 h-[20rem]">
				<div className="h-0 stop">
					{testimonials.map((t, i) => (
						<div
							style={{ animationDelay: `-${delay * i + 1}s` }}
							key={`${t.name}-${i}`}
							className="absolute left-0 cursor-pointer py-6 px-8 rounded-xl bg-secondary border border-border w-[30rem] animate-testimony flex-col flex gap-6 transition-all duration-300 hover:shadow-elegant hover:border-primary/40 hover:bg-secondary/95 focus-visible:ring-2 focus-visible:ring-primary/30"
						>
							<div className="flex items-center gap-4">
								<span className="h-16 flex items-center justify-center text-2xl w-16 rounded-full bg-gradient-primary text-primary-foreground">
									{getInitials(t.name)}
								</span>

								<div>
									<p className="font-medium text-lg">
										{t.name}
									</p>
									<p className="text-muted-foreground">
										{t.role}
									</p>
								</div>
							</div>

							<p className="italic text-muted-foreground text-lg">
								&quot;{t.quote}&quot;
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimony
