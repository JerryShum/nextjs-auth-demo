import Link from "next/link";

export default function Home() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen ">
         <h1 className="text-7xl font-bold mb-4 tracking-tight">
            Welcome to AuthApp!
         </h1>
         <p className="mb-6 text-lg">
            This is a demo application built with Next.js and NextAuth.js to
            showcase authentication and route protection.
         </p>
         <div className="flex flex-col gap-4 items-center">
            <Link
               className="px-6 py-2 bg-foreground rounded text-black w-full text-center hover:bg-zinc-400 duration-300"
               href={"/login"}
            >
               Login
            </Link>

            <Link
               className="px-6 py-2 bg-zinc-950 rounded border border-zinc-800 hover:bg-zinc-900 duration-300"
               href={"/dashboard"}
            >
               Go to Dashboard
            </Link>
         </div>
      </div>
   );
}
