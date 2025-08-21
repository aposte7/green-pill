import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'

function layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	)
}

export default layout
