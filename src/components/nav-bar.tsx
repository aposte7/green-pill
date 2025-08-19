import Link from 'next/link'

function NavBar() {
	return (
		<header className="bg-emerald-500/30 py-3 px-8 flex justify-between items-center">
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
				<button className="bg-gradient-primary text-primary-foreground px-5 py-1.5 font-medium rounded-sm">
					<Link href="/">Join Programs</Link>
				</button>
			</div>
		</header>
	)
}

export default NavBar
