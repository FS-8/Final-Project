import { GiSonicShoes } from 'react-icons/gi';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/index';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-putih';
function Sidebar() {
  return (
    <div className=" w-60 p-3 bg-cyan-900 flex flex-col text-putih">
      <div className="flex item-center gap-2 px-1 py-3">
        <GiSonicShoes fontSize={26} />
        <span className="text-lg tex-putih">SW-Admin</span>
      </div>
      <div className="py-8 flex flex-1 flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} link={link} />
        ))}
      </div>
      <div>bottom part</div>
    </div>
  );
}
function SidebarLink({ link }) {
  const { pathname } = useLocation();

  return (
    <Link to={link.path} className={classNames(pathname === link.path ? 'bg-putih text-hitam' : 'text-putih', linkClass)}>
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}

export default Sidebar;
