'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavBar() {
	const pathname = usePathname()

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/#about', label: 'About' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/blogs', label: 'Blogs' },
		{ href: '/programs', label: 'Programs' },
	]

	return (
		<header className="sticky top-0 left-0 right-0 z-50 border-b border-border bg-secondary/95">
			<div className="container xl:max-w-[89rem] mx-auto flex items-center justify-between px-6 py-3">
				{/* Logo */}
				<div>
					<Link
						className="text-2xl font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
						href="/"
					>
						Green Pill
					</Link>
				</div>

				{/* Desktop Menu */}
				<div className="flex items-center gap-4 md:gap-6">
					<ul className="inline-flex gap-6 justify-between max-lg:hidden">
						{navItems.map(({ href, label }) => (
							<li key={href}>
								<Link
									href={href}
									className={`transition-colors duration-200 text-sm ${
										pathname === href
											? 'text-emerald-700 font-semibold border-b-2 border-emerald-700 pb-1 hover:text-emerald-800'
											: 'text-gray-600 hover:text-emerald-700'
									}`}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>

					<Link
						href="/contact"
						className="bg-muted border-primary/20 border hover:bg-white/90 text-muted-foreground px-3 md:px-5 text-sm py-1.5 font-medium rounded-sm inline-block transition-colors"
					>
						Contact
					</Link>

					<Link
						href="/programs"
						className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 md:px-5 py-[7px] text-sm font-medium rounded-sm inline-block transition-colors"
					>
						Join
						<span className="hidden sm:inline-block">Programs</span>
					</Link>

					{/* Mobile Menu */}
					<div className="relative h-9 w-9 lg:hidden">
						<details className="absolute inset-y-0 rounded-md">
							<summary className="flex h-9 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-border hover:bg-gray-100 duration-200">
								<Menu size={24} strokeWidth={1.25} />
							</summary>

							<div className="fixed top-15 right-0 w-full border-t bg-secondary py-3 pb-4">
								<ul className="container xl:max-w-[89rem] mx-auto space-y-4 px-6 lg:hidden">
									{navItems.map(({ href, label }) => (
										<li key={href}>
											<Link
												href={href}
												className={`block transition-colors duration-200 ${
													pathname === href
														? 'text-emerald-700 font-semibold border-l-4 border-emerald-700 pl-2 hover:text-emerald-800'
														: 'text-gray-700 hover:text-emerald-700'
												}`}
											>
												{label}
											</Link>
										</li>
									))}
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
