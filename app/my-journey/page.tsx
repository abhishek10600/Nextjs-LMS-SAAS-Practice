import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const Profile = async () => {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">My Journey</h1>
      <p>Welcome to your learning journey!</p>
    </div>
  )
}

export default Profile