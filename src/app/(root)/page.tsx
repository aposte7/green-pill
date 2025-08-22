import JoinUS from '@/components/join-us'
import NavBar from '@/components/nav-bar'
import AboutUs from '@/features/home/components/about-us'
import ContactUs from '@/features/home/components/contact-us'
import Evolution from '@/features/home/components/evolution'
import Hero from '@/features/home/components/hero'
import Testimony from '@/features/home/components/testimony'

function page() {
	return (
		<>
			<main>
				<Hero />
				<AboutUs />
				<JoinUS />
				<Evolution />
				<Testimony />
				<ContactUs />
			</main>
		</>
	)
}

export default page
