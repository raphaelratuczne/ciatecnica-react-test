import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { CContainer } from '@coreui/react';
import Header from './components/header';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

function App() {
  return (
    <CContainer fluid>
      <Header/>
      <Navbar/>
      <Sidebar/>
    </CContainer>
  );
}

export default App;
