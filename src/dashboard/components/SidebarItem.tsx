"use client";



import Link from "next/link";
import { usePathname } from "next/navigation";

interface Route {
  id: number,
  title: string,
  subtitle: string,
  path: string,
}

interface Props {
  route: Route 
}

export const SidebarItem = ({ route }: Props) => {

  const pathname = usePathname();


  return (
    <Link
      href={ route.path }
      className="hover:bg-white/10 transition-all duration-150 ease-linear rounded-lg py-3 px-2 group"
    >
      <div className={`flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center  hover:text-blue-400 
        ${
          route.path == pathname
            ? 'text-blue-400'
            : 'text-slate-200'
          }`
      }>

        <div>
          <p className={`font-bold lg:text-lg`}>
            { route.title }
          </p>
          <p className={`text-slate-400 text-sm hidden md:block  transition-all`}>
            { route.subtitle }
          </p>
        </div>
      </div>
    </Link>
  );
};
