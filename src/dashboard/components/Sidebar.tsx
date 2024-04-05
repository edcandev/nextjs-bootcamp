import Link from "next/dist/client/link";
import { SidebarItem } from "./SidebarItem";

interface Route {
  id: number,
  title: string,
  subtitle: string,
  path: string,
}

const routes: Route[] = [
  { id: 1, title: 'Dashboard', subtitle: 'Main Page', path: '/dashboard' },
  { id: 2, title: 'Counter', subtitle: 'Next.js', path: '/dashboard/counter' },
  { id: 3, title: 'Server Side Data Fetching', subtitle: 'Server Side', path: '/dashboard/data-fetching/server-side'  },
  { id: 4, title: 'Client Side Data Fetching', subtitle: 'Client Side', path: '/dashboard/data-fetching/client-side' },
  { id: 5, title: 'Authetication', subtitle: 'And Interceptors', path: '/dashboard/authentication' }
]

export const Sidebar = () => {
  return (
    <div id="menu" className="bg-white/10 col-span-3 rounded-lg p-4 ">
      <h1 className="font-bold text-lg lg:text-3xl bg-white via-white/50 bg-clip-text text-transparent mb-2">
        Next.js Bootcamp<span className="text-blue-400">.</span>
      </h1>

      <p className="text-slate-400 text-sm mb-4">Engineering Talent Group</p>
      <hr className="my-2 border-slate-700" />
      <div id="menu" className="flex flex-col space-y-2 mt-5">
        
        {
          routes.map(route => <SidebarItem key={ route.id }  route={ route } />)
        }

        <Link href={'/auth/login'}   className="bg-blue-700 rounded text-start p-4 font-bold text-xl hover:bg-blue-800 transition-all">
          Login
        </Link>
        

        {/* <a
          href="#"
          className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
            
            <div>
              <p className="font-bold lg:text-lg leading-4 text-2xl group-hover:text-blue-400 text-blue-400">
                Dashboard Seleted
              </p>
              <p className="text-slate-400 text-sm hidden md:block">
                Data overview
              </p>
            </div>
          </div>
        </a> */}

      </div>
    </div>
  );
};
