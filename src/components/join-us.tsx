function JoinUS() {
	return (
		<section className="px-8 text-center text-white py-25 rounded-md ">
			<div className="px-6 max-w-5xl w-full mx-auto space-y-6 rounded-xl text-center pt-10 pb-8 bg-gradient-primary">
				<h3 className="text-3xl sm:text-4xl font-bold">
					Ready to Start Your Journey?
				</h3>

				<p className="sm:text-lg lg:text-xl text-muted">
					Join our free internship program and transform how you solve
					problems and build solutions.
				</p>

				<div className="flex justify-center items-center gap-4">
					<button
						className="border-border/30 border px-5 py-2 bg-white/20 rounded-md 
					hover:bg-white/50
					"
					>
						Apply for Next Cohort
					</button>

					<button className="border-border px-5 py-2 bg-white hover:bg-white/80 text-primary rounded-md ">
						Learn More
					</button>
				</div>
			</div>
		</section>
	)
}

export default JoinUS
