import { Menu, X } from 'lucide-react'
import Link from 'next/link'

function NavBar() {
	return (
		<header className="sticky border-b border-border z-50 top-0 left-0 right-0  bg-white/90 ">
			<div className="flex py-3 container xl:max-w-[89rem]  mx-auto px-6 justify-between items-center">
				<div>
					<Link
						className="text-2xl font-semibold text-emerald-700"
						href="/"
					>
						Green Pill
					</Link>
				</div>

				<div className="flex items-center gap-4 md:gap-6">
					<ul className="inline-flex gap-6 justify-between max-lg:hidden">
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
							<Link href="/">Blogs</Link>
						</li>
						<li>
							<Link href="/">Programs</Link>
						</li>
					</ul>

					<button className="bg-muted text-muted-foreground px-3 md:px-5 py-1.5 font-medium rounded-sm">
						<Link href="/">Contact</Link>
					</button>
					<button className="bg-primary text-primary-foreground px-3 md:px-5 py-[7px] text-sm font-medium rounded-sm">
						<Link href="/">
							Join{' '}
							<span className="hidden sm:inline-block">
								Programs
							</span>
						</Link>
					</button>

					<div className="relative h-9 w-9 lg:hidden">
						<details className="absolute rounded-md inset-y-0">
							<summary className="hover:bg-gold border-border flex h-9 w-10 cursor-pointer list-none items-center justify-center rounded-md border duration-200">
								<Menu size={24} strokeWidth={1.25} />
							</summary>

							<div className="bg-secondary pb-4 fixed top-15 right-0 w-full border-t py-3">
								<ul className="container xl:max-w-[89rem] px-6 space-y-4 mx-auto lg:hidden">
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
										<Link href="/">Blogs</Link>
									</li>
									<li>
										<Link href="/">Programs</Link>
									</li>
								</ul>
							</div>
						</details>
					</div>
				</div>
			</div>
		</header>
	)
}

export default NavBar
