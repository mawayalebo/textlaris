import Link from "next/link"
import { UserIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import Image from "next/image";
function Header () {
    const router = useRouter();
    const {data: session} = useSession();
    
  return (
      <header>
        <div className="border border-b-1 border-b-red-400 p-5">
            <div className="flex items-center max-w-4xl mx-auto">
                <div className="cursor-pointer flex-1">
                    <Link href="/" >
                        <h1 className="text-4xl font-bold text-red-400">Textlaris</h1>
                    </Link>
                    <div>
                        <span className="text-gray-400 text-xs">Intoducing your world to the world</span>
                    </div>
                </div>
                {
                    !session?.user?.email &&
                    <Link href={"/auth/signin"}>
                        <div className="flex iems-center">
                            <div onClick={()=>router.push("/auth/signin")} className="text-red-400 bg-white rounded-full px-2 cursor-pointer flex items-center py-2 space-x-2 ring ring-red-400 pr-3">
                                <UserIcon className="h-7"/>
                                <h2>Connect Account</h2>
                            </div>
                        </div>
                    </Link>
                }
                {
                    session?.user?.email &&
                    <Link href={`/user/${session?.user?.email}`}>
                        <div className="flex iems-center">
                            <div onClick={()=>router.push(`/user/${session?.user?.email!}`)} className="relative text-red-400 bg-white rounded-full cursor-pointer flex items-center py-2 space-x-2 ring ring-red-400 h-10 w-10 overflow-hidden">
                                <Image src={session.user.image!} alt={`${session.user.name} prifile image`} className="h-7" objectFit="cover" layout="fill"/>
                                <span className="text-black">{session.user.email!}</span>
                            </div>
                        </div>
                    </Link>
                }
                
                
            </div>
        </div>
    </header>
    
  )
}
export default Header