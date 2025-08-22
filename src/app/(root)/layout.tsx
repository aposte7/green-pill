import Footer from '@/components/footer'
import NavBar from '@/components/nav-bar'
import { Toaster } from 'sonner'

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
			<Toaster position="top-right" richColors />
		</>
	)
}

export default layout
