import Link from 'next/link'

function NavBar() {
	return (
		<header className="fixed z-50 top-0 left-0 right-0  bg-white/90 ">
			<div className="flex py-3 container xl:max-w-[89rem]  mx-auto px-6 justify-between items-center">
				<div>
					<Link
						className="text-2xl font-semibold text-emerald-700"
						href="/"
					>
						Green Pill
					</Link>
				</div>

				<div className="flex items-center space-x-3 gap-6">
					<ul className="inline-flex gap-6 justify-between   ">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/">About</Link>
						</li>
						<li>
							<Link href="/">Gallery</Link>
						</li>
						<li>
							<Link href="/">Programs</Link>
						</li>
					</ul>

					<button className="bg-muted text-muted-foreground px-5 py-1.5 font-medium rounded-sm">
						<Link href="/">Contact</Link>
					</button>
					<button className="bg-primary text-primary-foreground px-4 py-[7px] text-sm font-medium rounded-sm">
						<Link href="/">Join Programs</Link>
					</button>
				</div>
			</div>
		</header>
	)
}

export default NavBar
