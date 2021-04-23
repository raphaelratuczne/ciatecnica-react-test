import { useState } from 'react';
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane
} from '@coreui/react';
import { useLocation } from 'react-router-dom';

import RegistryPage from './registry/registry';
import ProfilePage from './profile/profile';

const Tabs = () => {
  let location = useLocation();

  const [activeKey, setActiveKey] = useState(() => {
    return RegExp('profile').test(location.pathname) 
      ? 'profile'
      : 'registry'
  })
  return (
    <div className="content">
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink
            href="#"
            active={activeKey === 'registry'}
            onClick={() => setActiveKey('registry')}>
            User Registry
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="#"
            active={activeKey === 'profile'}
            onClick={() => setActiveKey('profile')}>
            Profile
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane visible={activeKey === 'registry'}>
          <RegistryPage/>
        </CTabPane>
        <CTabPane visible={activeKey === 'profile'}>
          <ProfilePage/>
        </CTabPane>
      </CTabContent>
    </div>
  )
}

export default Tabs;