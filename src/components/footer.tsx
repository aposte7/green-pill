import {
	Leaf,
	Mail,
	Phone,
	MapPin,
	Linkedin,
	Twitter,
	Facebook,
} from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	const quickLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Programs', href: '#programs' },
		{ name: 'Why Evolve', href: '#why-evolve' },
		{ name: 'Contact', href: '#contact' },
	]

	const programs = [
		'Problem-Solving Fundamentals',
		'User-Centered Design Thinking',
		'Team Dynamics & Leadership',
		'Innovation & Future-Ready Skills',
	]

	return (
		<footer className="bg-foreground text-white py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
					<div className="space-y-6">
						<div className="flex items-center space-x-3">
							<div className="p-2 bg-gradient-primary rounded-lg">
								<Leaf className="h-6 w-6 text-white" />
							</div>
							<span className="text-2xl font-bold">
								Green Pill
							</span>
						</div>
						<p className="text-gray-300 leading-relaxed">
							Transforming problem-solvers into innovative leaders
							through comprehensive training programs and
							future-ready skills development.
						</p>
						<div className="flex space-x-4">
							<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
								<Linkedin className="h-5 w-5" />
							</div>
							<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
								<Twitter className="h-5 w-5" />
							</div>
							<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
								<Facebook className="h-5 w-5" />
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-6">
							Quick Links
						</h3>
						<ul className="space-y-3">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-gray-300 cursor-pointer hover:text-primary transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-6">
							Training Programs
						</h3>
						<ul className="space-y-3">
							{programs.map((program, index) => (
								<li key={index}>
									<span className="text-gray-300 text-sm transition-colors cursor-pointer">
										{program}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-6">
							Contact Information
						</h3>
						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-gray-300">
										hello@greenpill.training
									</p>
									<p className="text-sm text-gray-400">
										General inquiries
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-gray-300">
										+251 911 123 456
									</p>
									<p className="text-sm text-gray-400">
										Training support
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-gray-300">
										Addis Ababa, Ethiopia
									</p>
									<p className="text-sm text-gray-400">
										Training centers
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-700 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} Green Pill Training
							Organization. All rights reserved.
						</p>
						<div className="flex space-x-6 text-sm">
							<span className="text-gray-400 hover:text-primary transition-colors cursor-pointer">
								developed with love 💗
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
