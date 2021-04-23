import { useState, useEffect } from 'react';
import { 
  CContainer,
  CNav, 
  CNavItem,
  CNavLink,
  CRow,
  CCol,
  CFormLabel,
  CFormControl,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CPagination,
  CPaginationItem,
  CFooter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';
import { useParams, useHistory } from 'react-router-dom';

const List = () => {

  let history = useHistory();
  const { page } = useParams<any>();
  const [people, setPeople] = useState<any>(null);
  const [actPage, setActPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [status, setStatus] = useState('all');
  
  useEffect(() => {
    // carrega a lista ao carregar a pagina
    (async () => {
      await loadList(page ? page : null);
    })()
  },[]);

  const loadList = async (p?:number) => {
    const url = 'https://swapi.dev/api/people/' + (p ? `?page=${p}` : '');
    const resp = await fetch(url);
    const list = await resp.json();
    if (list && list.results) {
      list.results = list.results.map((person:any) => ({...person, status:true}));
    }
    setPeople(list);
    console.log('list',list);
  }

  useEffect(() => {
    if (actPage && actPage !== lastPage) {
      loadList(actPage);
      setLastPage(actPage);
    }
  }, [actPage, loadList, setLastPage]);

  const deletePerson = (i:number) => {
    setPeople((old:any) => ({
      ...old, 
      results: old.results.map((person:any,k:number) => ({
        ...person,
        status: i===k ? false : person.status}
      ))
    }));
  }

  const goPage = (p:number) => {
    if (p && p !== lastPage) {
      history.push(`/list/${p}`);
      setActPage(p);
    }
  }

  const getFilteredList = () => {
    if (status && people && people.results) {
      return people.results.filter((person:any) => {
        return status === 'all'
          ? true
          : status === 'active'
            ? person.status === true
            : person.status === false
      })
    }
    return [];
  }

  const generatePageLinks = () => {
    if (people && people.count > 10) {
      const links:any[] = [];
      const total = Math.ceil(people.count/10);
      links.push(
        <CPaginationItem
        key={'pagePrev'}
        disabled={people.previous?false:true}
        onClick={() => goPage(people.previous?.replace(/\D/g,''))}>
          Previous
        </CPaginationItem>);
      for (let i=1; i<=total; i++) {
        links.push(
          <CPaginationItem
            key={`page${i}`}
            onClick={() => goPage(i)}>
              {i}
          </CPaginationItem>)
      }
      links.push(
        <CPaginationItem
          key={'pageNext'}
          disabled={people.next?false:true}
          onClick={() => goPage(people.next?.replace(/\D/g,''))}
          >
          Next
        </CPaginationItem>);
      return links;
    }
    return null;
  }

  return (
    <CContainer fluid className="content">
      <CNav variant="pills">
        <CNavItem className="me-auto">
          <CNavLink href="/registry" active>
            <CIcon content={freeSet.cilPlus}></CIcon>
            Add
          </CNavLink>
        </CNavItem>
        <CNavItem className="d-flex">
          <CRow>
            <CCol xs="auto">
              <CFormLabel className="col-form-label">Status</CFormLabel>
            </CCol>
            <CCol xs="auto">
              <select className="form-select" aria-label="Default select example" value={status} onChange={(op) => setStatus(op.target.value)}>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inative">Inative</option>
              </select>              
            </CCol>
            <CCol xs="auto">
              <CFormControl type="text" placeholder="Search"/>
            </CCol>
          </CRow>
        </CNavItem>
      </CNav>
      <div>
        {people && 
        <CTable color="Light">
          <CTableHead color="Light">
            <CTableRow color="Light">
              <CTableHeaderCell color="Light">Name</CTableHeaderCell>
              <CTableHeaderCell color="Light">Username</CTableHeaderCell>
              <CTableHeaderCell color="Light">Eye Color</CTableHeaderCell>
              <CTableHeaderCell color="Light">Status</CTableHeaderCell>
              <CTableHeaderCell color="Light">Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          {people && people.results && getFilteredList().map((user:any, i:number) => (
            <CTableBody color="Light" key={i}>
              <CTableRow color="Light">
                <CTableDataCell color="Light">{user.name}</CTableDataCell>
                <CTableDataCell color="Light">{user.name.replace(' ','')}</CTableDataCell>
                <CTableDataCell color="Light">{user.eye_color}</CTableDataCell>
                <CTableDataCell color="Light">{user.status?'Active':'Inactive'}</CTableDataCell>
                <CTableDataCell color="Light">
                  <CButton color="primary" variant="ghost" href={`/profile/${user.url.replace(/\D/g,'')}`}>
                    <CIcon content={freeSet.cilPencil}></CIcon>
                  </CButton>
                  <CButton color="primary" variant="ghost" onClick={() => deletePerson(i)}>
                    <CIcon content={freeSet.cilXCircle}></CIcon>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>            
          ))}
        </CTable>}        
      </div>
      {people && people.count > 10 &&
      <CFooter>
        <div></div>
        <div>
          <CPagination className="d-flex">
            {generatePageLinks()}
          </CPagination>  
        </div>
      </CFooter>}
    </CContainer>
  )
}

export default List;
