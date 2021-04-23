import { useState } from 'react';
import {
  CForm,
  CRow,
  CFormLabel,
  CFormControl,
  CButton
} from '@coreui/react';

const Registry = () => {

  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [expire, setExpire] = useState('yes');

  const setValueMask = (field:'phone'|'mobile', val:string) => {
    const v = val
      .replace(/\D/g,'')
      .replace(/^(\d{3})(\d{1,})/, '($1) $2')
      .replace(/(.+\s\d{3})(\d{1,})/, '$1-$2')
      .replace(/(.+\d{4})(.+)/, '$1');
    
    if (field === 'phone') 
      setPhone(v);
    else 
      setMobile(v);
  }

  return (
    <div className="areaForm">
      <CForm>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Username
          </CFormLabel>
          <div className="col-sm-5">
            <CFormControl type="text"/>
          </div>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Full name
          </CFormLabel>
          <div className="col-sm-5">
            <CFormControl type="text" placeholder="First name"/>
          </div>
          <div className="col-sm-5">
            <CFormControl type="text" placeholder="Last name"/>
          </div>
        </CRow>        
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            E-mail Address*
          </CFormLabel>
          <div className="col-sm-10">
            <CFormControl type="email" />
          </div>          
        </CRow>    
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Phone Number
          </CFormLabel>
          <div className="col-sm-4">
            <CFormControl type="text" value={phone} onChange={(ev) => setValueMask('phone', ev.target.value)} />
          </div>
          <CFormLabel className="col-sm-2 col-form-label">
            Mobile Phone*
          </CFormLabel>
          <div className="col-sm-4">
            <CFormControl type="text" value={mobile} onChange={(ev) => setValueMask('mobile', ev.target.value)}/>
          </div>
        </CRow> 
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Password
          </CFormLabel>
          <div className="col-sm-8">
            <CFormControl type="password" />

          </div>          
        </CRow>                     
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Confirm Password
          </CFormLabel>
          <div className="col-sm-8">
            <CFormControl type="password" />
          </div>          
        </CRow>                     
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Expire
          </CFormLabel>
          <div className="col-sm-5">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" value="yes" checked={expire === 'yes'} onChange={(ev) => setExpire(ev.target.value)}/>
              <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" value="never" checked={expire === 'never'} onChange={(ev) => setExpire(ev.target.value)}/>
              <label className="form-check-label" htmlFor="inlineRadio2">Never</label>
            </div>
          </div>  
          {expire === 'yes' && 
          <CFormLabel className="col-sm-2 col-form-label">
            Expire Date
          </CFormLabel> }              
          {expire === 'yes' && 
          <div className="col-sm-3">
            <input className="form-control" type="date"></input>
          </div>}  
        </CRow>                     
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">
            Status
          </CFormLabel>
          <div className="col-sm-2">
            <select className="form-select">
              <option value="active">Active</option>
              <option value="inative">Inative</option>
            </select>
          </div>
          <CFormLabel className="col-sm-2 col-form-label">
            days
          </CFormLabel>
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
    </div>
  )
}

export default Registry;