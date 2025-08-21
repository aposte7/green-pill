import React from 'react'

const delay = Number((60 / 6).toFixed(0))
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

			<div className="w-full stop overflow-hidden relative mt-15 h-[20rem]">
				<div className="h-0 stop">
					{Array.from({ length: 6 }, (_, i) => (
						<div
							style={{
								animationDelay: `-${delay * i + 1}s`,
							}}
							key={i}
							className="absolute left-0 cursor-pointer group-hover:animation-play-state-paused py-6 px-8 rounded-xl bg-secondary border border-border w-[30rem] animate-testimony flex-col flex gap-6"
						>
							<div className="flex items-center gap-4">
								<span className="h-16 flex items-center justify-center text-2xl w-16 rounded-full bg-gradient-primary text-primary-foreground">
									SC
								</span>

								<div>
									<p className="font-medium text-lg">
										Sarah Chen
									</p>
									<p className="text-muted-foreground">
										Startup Founder
									</p>
								</div>
							</div>

							<p className="italic text-muted-foreground text-lg">
								&quot;The 5 Whys methodology completely
								transformed how I approach complex problems. I
								can now identify root causes much faster and
								create more effective solutions&quot;
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimony
