'use client'

import { Mail, Phone, MapPin, Calendar, ArrowRight, Users } from 'lucide-react'

const ContactUs = () => {
	const contactInfo = [
		{
			icon: Mail,
			title: 'Email Us',
			content: 'hello@greenpill.training',
			description: 'Get in touch for program inquiries',
		},
		{
			icon: Phone,
			title: 'Call Us',
			content: '+251 911 123 456',
			description: 'Speak with our training coordinators',
		},
		{
			icon: MapPin,
			title: 'Visit Us',
			content: 'Addis Ababa, Ethiopia',
			description: 'Training center locations',
		},
		{
			icon: Calendar,
			title: 'Free Consultation',
			content: 'Schedule Now',
			description: 'Book a 30-minute strategy session',
		},
	]

	return (
		<section
			id="contact"
			className="py-20 px-4 md:px-8 lg:px-10 bg-gradient-to-r from-muted to-white"
		>
			<div className="container mx-auto px-4">
				<div className="text-center text-foreground mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Ready to Transform?
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Join thousands of professionals who have already started
						their evolution journey. Get in touch to learn more
						about our programs.
					</p>
				</div>

				<div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-12 mb-16">
					<div className="lg:col-span-2">
						<div className="bg-background text-foreground rounded-xl shadow-md border">
							<div className="p-6 border-b">
								<h3 className="text-2xl font-semibold">
									Send Us a Message
								</h3>
								<p className="text-muted-foreground">
									Fill out the form below and send us you
									feedback or message.
								</p>
							</div>
							<div className="p-6 space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<label
											htmlFor="firstName"
											className="block text-sm font-medium"
										>
											First Name
										</label>
										<input
											id="firstName"
											type="text"
											placeholder="Enter your first name"
											className="w-full h-10 px-3 py-2 border rounded-md text-sm"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="lastName"
											className="block text-sm font-medium"
										>
											Last Name
										</label>
										<input
											id="lastName"
											type="text"
											placeholder="Enter your last name"
											className="w-full h-10 px-3 py-2 border rounded-md text-sm"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label
										htmlFor="email"
										className="block text-sm font-medium"
									>
										Email Address
									</label>
									<input
										id="email"
										type="email"
										placeholder="Enter your email address"
										className="w-full h-10 px-3 py-2 border rounded-md text-sm"
									/>
								</div>

								<div className="space-y-2">
									<label
										htmlFor="message"
										className="block text-sm font-medium"
									>
										Message
									</label>
									<textarea
										id="message"
										rows={4}
										placeholder="Tell us about your goals and challenges..."
										className="w-full px-3 py-2 border rounded-md text-sm"
									/>
								</div>

								<button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-md font-medium hover:bg-primary/90 transition">
									Send Message
									<ArrowRight className="h-5 w-5" />
								</button>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						{contactInfo.map((info, index) => (
							<div
								key={index}
								className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition"
							>
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
										<info.icon className="h-6 w-6 text-white" />
									</div>
									<div>
										<h3 className="font-semibold text-gray-900 mb-1">
											{info.title}
										</h3>
										<p className="text-primary font-medium mb-1">
											{info.content}
										</p>
										<p className="text-sm text-gray-600">
											{info.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactUs
