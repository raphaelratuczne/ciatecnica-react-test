import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  CForm,
  CRow,
  CFormLabel,
  CFormControl,
  CButton
} from '@coreui/react';

const Profile = () => {

  const { id } = useParams<any>();
  const [user, setUser] = useState<any>();

  const gerUserName = () => {
    if (user)
      return user.name.replace(/\s/g,'');
    return '';
  }

  const getFirstName = () => {
    if (user)
      return user.name.split(' ')[0];
   return ''; 
  }

  const getLastName = () => {
    if (user)
      return user.name.split(' ').pop();
    return ''; 
  }

  useEffect(() => {
    (async () => {
      const resp = await fetch(`https://swapi.dev/api/people/${id||1}/`);
      const people = await resp.json();
      setUser(people);
    })()
  },[])  

  return (
    <div className="areaForm">
      {user && (
      <CForm>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Username
          </CFormLabel>
          <div className="col-sm-5">
            <CFormControl type="text" value={`${gerUserName()}`} onChange={()=>{}}/>
          </div>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Full name
          </CFormLabel>
          <div className="col-sm-5">
            <CFormControl type="text" value={`${getFirstName()}`} onChange={()=>{}}/>
          </div>
          <div className="col-sm-5">
            <CFormControl type="text" value={`${getLastName()}`} onChange={()=>{}}/>
          </div>
        </CRow>    
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Profile
          </CFormLabel>
          <div className="col-sm-2">
            <select className="form-select">
              <option value="owner">Owner</option>
              <option value="driver">Driver</option>
              <option value="office">Office</option>
            </select>
          </div>
          <div className="col-sm-2"></div>          
          <CFormLabel className="col-sm-1 col-form-label">
            Company
          </CFormLabel>
          <div className="col-sm-2">
            <select className="form-select">
              <option value="1">Company 1</option>
              <option value="2">Company 2</option>
              <option value="3">Company 3</option>
            </select>
          </div>          
        </CRow> 
        <CRow className="mb-3">
          <div className="col-sm-10"></div>
          <div className="col-sm-1">
            <CButton color="light" href="/">Cancel</CButton>
          </div>
          <div className="col-sm-1">
            <CButton color="warning" href="/">Save</CButton>
          </div>
        </CRow>                             
      </CForm>
      )}
    </div>
  )
}

export default Profile;