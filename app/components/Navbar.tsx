import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-wok-sans">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            width={60}
            height={60}
            alt="Logo"
            className="rounded-full"
          />
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link
                href="/startup/create"
                className="text-sm text-blue-600 hover:underline"
              >
                Create
              </Link>

              <form action={async () => {
                "use server";
                await signOut({ redirectTo:"/" });
                }}>

                <button type="submit" className="text-sm text-red-500 hover:underline">
                  Sign out
                </button>

              </form>

              <Link
                href={`/user/${session?.id}`}
                className=" text-blue-600 hover:underline"
              >
                {session?.user?.name}
              </Link>
            </>
          ) : (
            
            <form action={async () =>{
              "use server";
              await signIn("github");

            }}>

              <button type="submit">
                Sign in
              </button>
              
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
