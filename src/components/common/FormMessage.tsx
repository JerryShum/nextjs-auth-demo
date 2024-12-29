interface FormMessageProps {
   children: React.ReactNode;
}

export default function FormMessage({ children }: FormMessageProps) {
   return (
      <div className="w-full">
         <span className=" text-sm tracking-tight text-red-800">
            {children}
         </span>
      </div>
   );
}
