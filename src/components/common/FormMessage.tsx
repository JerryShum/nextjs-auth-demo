interface FormMessageProps {
   children: React.ReactNode;
}

export default function FormMessage({ children }: FormMessageProps) {
   return (
      <div className="w-full">
         <span className=" text-sm text-destructive-foreground tracking-tight">
            {children}
         </span>
      </div>
   );
}
