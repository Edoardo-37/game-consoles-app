import { Link } from "react-router-dom";
import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="fixed top-0 bg-accent text-base-100 z-10 navbar h-fit w-full">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 text-2xl font-bold font-[Sora]">
          <Link title="Vai alla pagina principale" to="/">ConsoleVault</Link>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal text-lg font-bold">
              {/* Navbar menu content here */}
              <li>
                <Link title="Vai alla pagina dedicata alla storia delle console Nintendo" to="/nintendo-consoles">Nintendo</Link>
              </li>
              <li>
                <Link title="Vai alla pagina dedicata alla storia delle console Sony" to="/sony-consoles">Sony</Link>
              </li>
              <li>
                <Link title="Vai alla pagina dedicata alla storia delle console Microsoft" to="/microsoft-consoles">Microsoft</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full font-bold font-[Sora] w-80 p-4 md:w-160">
          {/* Drawer content */}
          <li className="pt-10 my-5 text-xl lg:px-2">
            <Link className='text-base-content link-hover hover:font-bold my-4 p-4' href="/">Home</Link>
            <PageLinks />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
