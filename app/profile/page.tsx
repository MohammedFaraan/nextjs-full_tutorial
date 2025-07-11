'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation"

function ProfilePage() {
    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams();
    console.log(searchParams.get("name"));
    
  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={() => router.forward()}>Router Button</button>
    </div>
  )
}

export default ProfilePage
