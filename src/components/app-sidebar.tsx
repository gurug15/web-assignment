'use client'
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


  
  export function AppSidebar() {
     const pathname = usePathname();
     console.log(pathname)
     return (
      <section className="sticky left-0 top-0 flex h-screen w-fit flex-col border-r-2 border-slate-800 justify-between  bg-dark-1 p-6 pt-10 text-slate-400 max-sm:hidden lg:w-[264px]">
        <div className="flex flex-1 flex-col gap-6">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            
            return (
              <Link
                href={item.route}
                key={item.label}
                className={cn(
                  'flex gap-4 items-center p-4 rounded-lg justify-start',
                  {
                    'bg-slate-800 text-white': isActive,
                  }
                )}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={24}
                  height={24}
                />
                <p className="text-lg font-semibold max-lg:hidden">
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    );
  };
  
  





