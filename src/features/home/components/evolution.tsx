import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function Evolution() {
	return (
		<section className="py-20 px-8">
			<div className="text-center mb-20 space-y-6 max-w-5xl m-auto w-full">
				<h3 className="text-4xl font-bold">
					Why{' '}
					<span className="bg-gradient-primary text-transparent bg-clip-text">
						Evolution
					</span>{' '}
					Matters
				</h3>

				<p className="sm:text-sm md:text-xl text-muted-foreground">
					Have you ever felt like you&apos;ve stopped growing your
					skills? Technology and society evolve, and as a
					problem-solver, you need to evolve too.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
				<div className="bg-primary/10  space-y-5 text-center rounded-xl p-8">
					<div className="rounded-lg h-64 overflow-hidden">
						<Image
							className="w-full object-cover h-full"
							src="/evolution.jpg"
							height={400}
							width={400}
							alt="AN Image that  show evolution in terms of steps"
						/>
					</div>

					<div className="mx-4">
						<h5 className="text-2xl mb-2 font-bold">
							The Evolution Path
						</h5>
						<p className="text-muted-foreground">
							From basic problem identification to complex systems
							thinking - your journey matters.
						</p>
					</div>
				</div>

				<div className="rounded-xl  space-y-4 p-3">
					<h5 className="text-3xl font-bold">The Reality Check</h5>

					<div className="flex items-center gap-3">
						<span className="h-8 w-8 shrink-0 flex items-center justify-center bg-destructive/20 text-destructive rounded-full">
							!
						</span>
						<p>
							<span className="font-medium">
								21% of startups fail{' '}
							</span>
							due to poor team formation and problem-solving
							approaches.
						</p>
					</div>
					<div className="flex items-center gap-3">
						<span className="h-8 w-8 shrink-0 flex items-center justify-center bg-destructive/20 text-destructive rounded-full">
							!
						</span>
						<p>
							<span className="font-medium">
								Technology evolves faster{' '}
							</span>
							than most professionals can adapt their skills.
						</p>
					</div>
					<div className="flex items-center gap-3">
						<span className="h-8 w-8 shrink-0 flex items-center justify-center bg-destructive/20 text-destructive rounded-full">
							!
						</span>
						<p>
							<span className="font-medium">
								The world rewards{' '}
							</span>
							the prepared, the adaptive, and the curious - not
							mediocrity.
						</p>
					</div>

					<div className="text-white mt-5 space-y-3 rounded-xl bg-gradient-primary  py-5 px-6">
						<h5 className=" font-bold text-xl">
							The Critical Question
						</h5>

						<p className="text-xl">
							Are you{' '}
							<span className="font-bold text-white/80">
								evolving
							</span>{' '}
							or just{' '}
							<span className="font-bold text-white/80">
								existing?
							</span>
						</p>

						<Link
							href="/programs"
							className="border-border/30 cursor-pointer w-full justify-center items-center rounded-md duration-200 hover:bg-white/40 inline-flex gap-3 bg-white/20 border py-2.5 px-5"
						>
							Start Your Evolution Journey{' '}
							<ArrowRight size={18} />
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Evolution
