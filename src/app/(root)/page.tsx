import JoinUS from '@/components/join-us'
import NavBar from '@/components/nav-bar'
import AboutUs from '@/features/home/components/about-us'
import Hero from '@/features/home/components/hero'
import OurMission from '@/features/home/components/our-mission'
import Testimony from '@/features/home/components/testimony'

function page() {
	return (
		<>
			<NavBar />
			<main>
				<Hero />
				<AboutUs />
				<OurMission />
				<Testimony />
				<JoinUS />
			</main>
		</>
	)
}

export default page
