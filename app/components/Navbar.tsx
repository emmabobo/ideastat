import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from "@/auth"; 
import { redirect } from 'next/dist/server/api-utils';

const Navbar = async () => {

  
  const session = await auth;

  return (
    <header className='px-5 py-3 bg-white font-work-sans'>
      <nav className='flex justify-between items-center'>

        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={150} height={150} alt="Logo" />
          {/* <span className="font-bold text-xl">IdeaStat</span> */}
        </Link>

        <div className='flex items-center gap-5 text-blaclk'>
          {session?.user ? (
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

              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
              
            </>
          ):(
              
              <form action={async () =>{
                'use server';
                await signIn ('github', { redirect: '/' });
                } }>
                <button type='submit'>
                  Login  
                </button>
              </form>

              
            )}
          
        </div>


      </nav>
    </header>
      
  );
};

export default Navbar;
