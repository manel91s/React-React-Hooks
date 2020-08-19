import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

//Importamos provider
import CategoriasProvider from './context/CategoriasContext';

function App() {
  return (

    //Importamos el provider donde fluirá los states en la raiz de todos los componentes para que fluya entre todos ellos.
    <CategoriasProvider>
        <Header/>

        <div className="container mt-5">
          <div className="row">
              <Formulario/>
          </div>
        </div>
    </CategoriasProvider>
  );
}

export default App;
