import Link from "next/link";

function Navbar() {
   return (
      <div className="absolute top-0 w-full ">
         <div className="flex justify-end p-4 space-x-4">
            <Link
               className="text-foreground hover:text-zinc-300  font-semibold  duration-300"
               href={"/"}
            >
               {" "}
               Home
            </Link>

            <Link
               className="text-foregorund hover:text-zinc-300 font-semibold duration-300"
               href={"/login"}
            >
               {" "}
               Login
            </Link>

            <Link
               className="text-foregorund hover:text-zinc-300 font-semibold duration-300"
               href={"/dashboard"}
            >
               {" "}
               Dashboard
            </Link>
         </div>
      </div>
   );
}

export default Navbar;
