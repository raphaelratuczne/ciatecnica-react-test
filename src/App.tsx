// import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { CContainer, CRow, CCol } from '@coreui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/header';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

import ListPage from './pages/list/list';
import TabsPage from './pages/tabs/tabs';

function App() {
  return (
    <CContainer fluid>
      <CRow>
        <Header/>
        <Navbar/>
      </CRow>
      <CRow>
        <CCol sm="auto">
          <Sidebar/>
        </CCol>
        <CCol>
          <CContainer fluid>
            <Router>
              <Switch>
                <Route path="/registry" children={<TabsPage/>}/>
                <Route path="/profile/:id" children={<TabsPage/>}/>              
                <Route path="/list/:page" children={<ListPage/>}/>
                <Route path="/" children={<ListPage/>}/>
              </Switch>
            </Router>
          </CContainer>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default App;
