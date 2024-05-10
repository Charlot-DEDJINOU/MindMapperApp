import { Link } from 'react-router-dom';
import DropdownMessage from './DropdownMessage';
import DropdownUser from './DropdownUser';
import LogoIcon from '../../assets/logo.svg';
import SearchIcon from '../icons/SearchIcon';
import MenuIcon from '../icons/MenuIcon';
import DarkModeSwitcher from './DarkModeSwitcher';

export default function Header (props)  {

    const showSideBar = (e) => {
        e.stopPropagation();
        props.setSidebarOpen(!props.sidebarOpen);
    }

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => showSideBar(e)}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <MenuIcon sidebarOpen={props.sidebarOpen}/>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={LogoIcon} alt="Logo" className='w-9'/>
          </Link>
        </div>

        <div className="hidden sm:block">
          <form>
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <SearchIcon />
              </button>
              <input
                type="text"
                placeholder="Recherher..."
                className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white xl:w-125"
              />
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownMessage />
          </ul>

          <DropdownUser />
        </div>
      </div>
    </header>
  );
};