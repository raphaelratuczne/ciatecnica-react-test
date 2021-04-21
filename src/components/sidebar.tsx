import { CSidebar, CSidebarNav, CNavLink } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

const Sidebar = () => {
  return (
    <CSidebar className="sidebar-show">
      <CSidebarNav>
        <CNavLink>
          <CIcon content={freeSet.cilPeople}></CIcon>
        </CNavLink>
      </CSidebarNav>
    </CSidebar>
  );
}

export default Sidebar;