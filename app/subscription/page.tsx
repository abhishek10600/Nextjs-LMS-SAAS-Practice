// import { auth } from '@clerk/nextjs/server'
// import { redirect } from 'next/navigation'

import { PricingTable } from "@clerk/nextjs"

const Subscription = async () => {
  // const { userId } = await auth()
  
  // if (!userId) {
  //   redirect('/sign-in')
  // }

  return (
    <div>
      <PricingTable/>
    </div>
  )
}

export default Subscription