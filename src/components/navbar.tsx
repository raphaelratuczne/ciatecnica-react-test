import { 
  CNavbar, 
  CContainer,
  CNavbarBrand,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CBreadcrumb,
  CBreadcrumbItem
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

const Navbar = () => {
  return (
    <CNavbar expand="lg" className="bg-light">
      <CContainer fluid>
        <CNavbarBrand href="#">Navbar</CNavbarBrand>
        <CCollapse className="navbar-collapse" visible={true}>
          <CNavbarNav className="me-auto mb-2 mb-lg-0">
            <CNavItem>
              <CNavLink href="#" active>
                Users
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
          <CBreadcrumb className="d-flex">
            <CBreadcrumbItem href="#">
              <CIcon content={freeSet.cilHome}></CIcon>
            </CBreadcrumbItem>
            <CBreadcrumbItem href="#" active>Users</CBreadcrumbItem>
            <CBreadcrumbItem>List</CBreadcrumbItem>
          </CBreadcrumb>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
}

export default Navbar;