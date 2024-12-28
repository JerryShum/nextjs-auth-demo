export default function LoginForm() {
   return (
      <div className="p-2 border border-muted rounded-lg flex flex-col items-center max-w-96">
         <h2>Login</h2>
         <form>
            <div>
               <label htmlFor="email">Email:</label>
               <input type="email" id="email" name="email" required />
            </div>
            <div>
               <label htmlFor="password">Password:</label>
               <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
         </form>
         <button>Login with GitHub</button>
         <button>Login with Google</button>
      </div>
   );
}
