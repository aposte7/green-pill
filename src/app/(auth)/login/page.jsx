import LoginForm from '@/blog_system/LoginForm'
import { Toaster } from 'sonner'

function page() {
	return (
		<div>
			<LoginForm />
			<Toaster position="top-right" richColors />
		</div>
	)
}

export default page
