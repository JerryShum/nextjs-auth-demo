import LoginForm from '@/components/login/LoginForm';

export default function LoginPage() {
   return (
      <div className="flex flex-col items-center">
         <h1 className="font-sans text-5xl font-bold mt-20 mb-10 text-center">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-tight">
               Auth.js Custom Login Page
            </span>{' '}
         </h1>
         <LoginForm />
      </div>
   );
}
