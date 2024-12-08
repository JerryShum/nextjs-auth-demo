export default function LoginPage() {
   return (
      <div className="h-full flex flex-col items-center justify-center">
         <form className="max-w-sm mx-auto p-6 border border-zinc-800 rounded-xl">
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <input
               type="text"
               placeholder="Username"
               className="border px-4 py-2 mb-3 w-full rounded text-black"
            />
            <input
               type="password"
               placeholder="Password"
               className="border px-4 py-2 mb-3 w-full rounded text-black"
            />
            <button
               type="submit"
               className="bg-foreground rounded text-black w-full text-center hover:bg-zinc-400 duration-300 py-2"
            >
               Log In
            </button>
         </form>
      </div>
   );
}
