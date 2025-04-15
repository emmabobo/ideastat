import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from "@/auth"; 

const Navbar = async () => {

  const session = await auth();

  return (
    < >
    <header className='px-5 py-3 bg-white font-work-sans'>
      <nav className='flex justify-between items-center'>

        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={40} height={40} alt="Logo" className="rounded-full" />
          <span className="font-bold text-xl">IdeaStat</span>
        </Link>

        <div className='flex items-center gap-5 text-blaclk'>
          {session && session?.user ? (
            <>
              <Link href="/dashboard" className=" hover:text-gray-700">
                <span>Dashboard</span>
              </Link>

              <Link href="/startup/create" className=" hover:text-gray-700">
                <span>
                  Create
                </span>
              </Link>
              
              <form action={async () =>{
                'use server';
                await signOut({ callbackUrl: '/' });
                } }>
                  <button type='submit'>Logout</button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
              
              </>
          ):(
              
              <form action={async () =>{
                'use server';
                await signIn('github');
                } }>
                <button>
                  Login  
                </button>
              </form>

              
            )}
          
        </div>


      </nav>
    </header>
      
    </>
  )
}

export default Navbar;
