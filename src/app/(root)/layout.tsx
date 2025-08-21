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
		</>
	)
}

export default layout
