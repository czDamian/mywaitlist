'use client';

import Link from "next/link"

const page = () => {
  return (
    <div className="text-3xl text-center mt-20">Welcome to your dashboard. Please continue to  
      <Link className="text-red-500" href="dashboard/actions"> Actions </Link> or 
      <Link className="text-red-500" href="dashboard/profile"> Profile </Link>
    </div>
  )
}

export default page