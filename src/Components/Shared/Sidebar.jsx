import { GiSonicShoes } from 'react-icons/gi';
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/index.jsx';
import classNames from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-putih';
function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="bg-ungu w-60 p-3 flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <GiSonicShoes fontSize={24} />
        <span className="text-neutral-200 text-lg">ShoesWord</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
        <div onClick={() => navigate('/login-admin')} className={classNames(linkClass, 'cursor-pointer text-red-500')}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
}
function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link to={link.path} className={classNames(pathname === link.path ? 'bg-hitam text-hitam' : 'text-putih', linkClass)}>
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}

export default Sidebar;
