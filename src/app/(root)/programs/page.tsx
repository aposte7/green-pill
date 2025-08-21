import { Clock, Users, Calendar, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const Page = () => {
	const program = {
		title: 'Green Pill Internship Program',
		duration: '10 weeks',
		participants: '20-30 per cohort',
		level: 'All Levels',
		description:
			"Join our comprehensive internship program where you'll learn essential problem-solving skills, team dynamics, user-centered design thinking, and innovation methodologies. This is a complete journey that transforms how you approach challenges in your career.",
		highlights: [
			'5 Whys Methodology & Root Cause Analysis',
			'Persona Mapping & User-Centered Design',
			'Team Formation & Builder-Thinker-Connector Model',
			'Innovation Frameworks & Future-Ready Skills',
			'Real-world Project Experience',
			'Mentorship & Career Guidance',
			'Certificate of Completion',
			'Alumni Network Access',
		],
		price: 'Free',
		nextCohort: 'coming soon..',
		applicationDeadline: '.',
	}

	return (
		<section id="programs" className="py-20 bg-gradient-subtle">
			<div className="container mx-auto px-4">
				<div className="mb-16 text-center">
					<h2 className="mb-6 text-3xl sm:text-4xl font-bold text-foreground md:text-5xl">
						Green Pill Internship Program
					</h2>
					<p className="mx-auto max-w-3xl text-xl text-muted-foreground">
						Join our comprehensive free internship program designed
						to develop your problem-solving skills, leadership
						capabilities, and future-ready mindset.
					</p>
				</div>

				<div className="relative mb-16 overflow-hidden rounded-2xl">
					<div className="aspect-video bg-gradient-primary">
						<Image
							width={400}
							height={400}
							src="/img/green-11.jpg"
							alt="Green Pill internship program participants learning problem-solving methodologies"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/40" />
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="text-center text-white">
								<h3 className="mb-4 text-3xl font-bold md:text-4xl">
									Transform Your Problem-Solving Skills
								</h3>
								<p className="text-xl opacity-90">
									10 - weeks comprehensive program •
									Real-world applications • Hands on
									mentorship
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mx-auto mb-16 max-w-4xl">
					<div className="rounded-xl border bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-elegant">
						<div className="text-center">
							<div className="mb-4 flex items-center justify-center">
								<span className="rounded-md bg-gradient-primary px-6 py-2 text-lg font-medium text-white">
									{program.level}
								</span>
							</div>
							<h3 className="mb-4 text-3xl font-bold text-foreground">
								{program.title}
							</h3>
							<div className="flex justify-center space-x-8 text-muted-foreground">
								<div className="flex items-center space-x-2">
									<Clock className="h-5 w-5" />
									<span className="font-medium">
										{program.duration}
									</span>
								</div>
								<div className="flex items-center space-x-2">
									<Users className="h-5 w-5" />
									<span className="font-medium">
										{program.participants}
									</span>
								</div>
								<div className="flex items-center space-x-2">
									<Calendar className="h-5 w-5" />
									<span className="font-medium">
										Next Cohort: {program.nextCohort}
									</span>
								</div>
							</div>
						</div>

						<div className="mt-8 space-y-8">
							<p className="text-center text-lg leading-relaxed text-muted-foreground">
								{program.description}
							</p>

							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
								<div>
									<h4 className="mb-4 text-lg font-bold text-foreground">
										What You&apos;ll Learn:
									</h4>
									<ul className="space-y-3">
										{program.highlights.map(
											(highlight, idx) => (
												<li
													key={idx}
													className="flex items-start space-x-3 text-base text-muted-foreground"
												>
													<CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
													<span>{highlight}</span>
												</li>
											)
										)}
									</ul>
								</div>

								<div className="space-y-6">
									<div className="rounded-xl bg-gradient-primary p-6 text-center text-white">
										<div className="mb-2 text-4xl font-bold">
											{program.price}
										</div>
										<div className="text-lg opacity-90">
											Complete Program
										</div>
									</div>

									<div className="space-y-3 text-center">
										<div className="text-sm text-muted-foreground">
											<strong>
												Application Deadline:
											</strong>
											{program.applicationDeadline}
										</div>
										<button className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
											Apply Now
											<ArrowRight className="ml-2 h-5 w-5" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Page
