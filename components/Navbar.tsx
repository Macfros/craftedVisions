import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProviders from "./AuthProviders"
import {getCurrentUser} from '@/lib/session';
import {signOut} from 'next-auth/react';
import ProfileMenu from "./ProfileMenu"

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="flexBetween navbar navDes">
     <div className="flex-1 flexStart gap-10">
     <Link href="/"> <Image src="/logo.svg" width={150} height={53} alt="CraftedVisions"/></Link>


    <ul className="xl:flex hidden text-small font-bold gap-7">
    {NavLinks.map((link)=> (
      <Link href={link.href} key={link.key} className="hover:text-base ease-in duration-300">
        {link.text}
      </Link>
    ))}
     </ul>
     </div>

     <div className="flexCenter gap-4">
     {session?.user ? (
       <>
          <ProfileMenu session={session}/>
         <Link href="/create-project"> <div className="border-none rounded-xl p-2.5 bg-purple-400 text-white ease-in duration-300 hover:bg-violet-300">Share work </div></Link>
       </>
     ) : (
       <AuthProviders />
     ) }
     </div>
     </nav>
  )
}

export default Navbar
