import { CSidebar, CSidebarNav, CNavLink } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

const Sidebar = () => {
  return (
    <CSidebar style={{minHeight:'600px', height: '100%'}}>
      <CSidebarNav>
        <li>
          <CNavLink href="/" className="justify-content-center">
            <CIcon content={freeSet.cilPeople} size="lg"></CIcon>
          </CNavLink>
        </li>
      </CSidebarNav>
    </CSidebar>
  );
}

export default Sidebar;