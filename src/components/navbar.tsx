import { 
  CNavbar, 
  CContainer,
  CNavbarBrand,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CBreadcrumb,
  CBreadcrumbItem
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

const Navbar = () => {

  const page = RegExp('registry|profile').test(window.location.href) ? 'registry' : 'list';

  return (
    <CNavbar expand="lg" className="bg-dark" colorScheme="dark">
      <CContainer fluid>
        <CNavbarBrand>Navbar</CNavbarBrand>
        <CNavbarNav className="me-auto mb-2 mb-lg-0">
          <CNavItem>
            <CNavLink href="/" active>
              Users
            </CNavLink>
          </CNavItem>
        </CNavbarNav>
        <CBreadcrumb className="d-flex">
          <CBreadcrumbItem href="/">
            <CIcon content={freeSet.cilHome}></CIcon>
          </CBreadcrumbItem>
          <CBreadcrumbItem href="/">Users</CBreadcrumbItem>
          {page === 'list' && <CBreadcrumbItem>List</CBreadcrumbItem>}
          {page === 'registry' && <CBreadcrumbItem>Create</CBreadcrumbItem>}
        </CBreadcrumb>
      </CContainer>
    </CNavbar>
  );
}

export default Navbar;