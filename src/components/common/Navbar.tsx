import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuIndicator,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
   NavigationMenuViewport,
} from '@/components/UI/navigation-menu';
import Link from 'next/link';

export default function Navbar() {
   return (
      <nav className="w-full py-6 border-b border-b-muted-foreground">
         <div className="flex justify-between items-center">
            <Link href={'/'}>
               <h1 className="font-semibold text-2xl tracking-tight">
                  Next.js Auth Demo
               </h1>
            </Link>

            <NavigationMenu>
               <NavigationMenuList>
                  <NavigationMenuItem>
                     <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                           className={navigationMenuTriggerStyle()}
                        >
                           <span className="text-lg">Home</span>
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                           className={navigationMenuTriggerStyle()}
                        >
                           <span className="text-lg">Home</span>
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                           className={navigationMenuTriggerStyle()}
                        >
                           <span className="text-lg">Home</span>
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
               </NavigationMenuList>
            </NavigationMenu>
         </div>
      </nav>
   );
}
