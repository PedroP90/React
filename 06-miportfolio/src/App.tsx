import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './commons/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { ServiciosPage } from './pages/Servicios/Servicios';
import { FormacionPage } from './pages/Formacion/Formacion';
import { QsomosPage } from './pages/Qsomos/Qsomos';
import { ContactoPage } from './pages/Contacto/Contacto';
import { WebPage } from './pages/Servicios/pages/Web';
import { OraclePage } from './pages/Formacion/pages/oracle';
import { FibraPage } from './pages/Formacion/pages/fibra';
import { CiscoPage } from './pages/Formacion/pages/cisco';
import { CloudPage } from './pages/Servicios/pages/Cloud';
import { OrdenadoresListCard } from './pages/Ordenadores/OrdenadoresListCard';

function App() {
  return (
    <>
      <div className='container'>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path='/' element= {<Main></Main>}>
            <Route path='servicios' element={ <ServiciosPage />} >
              <Route path='cloud' element={ <CloudPage />} />  
              <Route path='dweb' element={ <WebPage />} />    
            </Route>

            <Route path='formacion' element={ <FormacionPage />}>
              <Route path='oracle' element={<OraclePage />} />
              <Route path='fibra' element={<FibraPage />} />
              <Route path='cisco' element={<CiscoPage />} />
              
            </Route>       
            <Route path='qsomos' element={ <QsomosPage />} />       
            <Route path='contacto' element={ <ContactoPage />} />       
          </Route>
          <Route path='ordenadores' element={<OrdenadoresListCard />} />   
        </Routes>
      </div>
    </>
  );
}

export default App;
