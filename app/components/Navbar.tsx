import Link from 'next/link'
import Image from 'next/image'
import {auth , signOut}  from "@/auth"; 
import LoginButton from '@/components/ui/LoginButton';


const Navbar = async () => {
  const session = await auth;

  return (
    <header className='px-3 py-4 border-2 border-red-500 bg- font-work-sans'>
      <nav className='border-2 border-black-500  md:mx-auto max-w-7xl flex justify-between items-center'>

        <Link href="/" className="flex items-center gap-2">
          <Image src="/Vector.svg" width={30} height={30} alt="Logo" />
          <Image src="/logo.svg" width={50} height={50} alt="Logo" className='hidden' />
          <Image src="/logoL.svg" width={150} height={150} alt="Logo" className='hidden'/>
          {/* <span className="font-bold text-xl">IdeaStat</span> */}
        </Link>

        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              
              <Link href="/startup/create" 
                className=" hover:text-gray-700">
                <span>
                  Create
                </span>
              </Link>
              
              <form action={async () =>{
                'use server';
                await signOut({ redirectTo: '/' });
                } }>
                  <button type='submit'>Logout</button>
              </form>

              <Link href={`/user/${session.user.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
              
            </>
            
            ):(
              
              <>
                <LoginButton />
              </>
            )
          }
           
        </div>


      </nav>
    </header>
      
  );
};

export default Navbar;
