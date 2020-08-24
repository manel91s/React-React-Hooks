import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaRecetas from './components/ListaRecetas';

//Importamos provider
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (

    //Importamos el provider donde fluirá los states en la raiz de todos los componentes para que fluya entre todos ellos.
    <CategoriasProvider>
      <RecetasProvider>
      <ModalProvider>
        <Header/>

        <div className="container mt-5">
          <div className="row">
              <Formulario/>
          </div>
          
          <ListaRecetas/>
        </div>

        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
