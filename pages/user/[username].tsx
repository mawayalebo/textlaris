import {useRouter} from "next/router"
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
function User() {
    const router = useRouter();
    const { data: session} = useSession();
    useEffect(()=>{
        if(!session?.user?.email){
            router.push("/")
        }
    },[session])

  return (
    <div>
      <div>
        <button onClick={()=>{
          signOut().then(()=>{
            router.push("/");
          })
          
          }}>Sign out</button>
      </div>
    </div>
  )
}
export default User