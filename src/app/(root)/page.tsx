import JoinUS from '@/components/join-us'
import NavBar from '@/components/nav-bar'
import AboutUs from '@/features/home/components/about-us'
import Evolution from '@/features/home/components/evolution'
import Hero from '@/features/home/components/hero'
import Testimony from '@/features/home/components/testimony'

function page() {
	return (
		<>
			<NavBar />
			<main>
				<Hero />
				<AboutUs />
				<Testimony />
				<JoinUS />
				<Evolution />
			</main>
		</>
	)
}

export default page
