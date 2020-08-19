import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


//Crear el Context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    //Crear el state del Context
    const [categorias, guardarCategorias] = useState([]);

    //Ejecutar el llamado a la api
    useEffect (() => {
        const obtenerCategorias = async () => {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
            
            const categorias = await axios.get(url);
            console.log(categorias);
        }
        
        obtenerCategorias();

    }, [])

    return (
        <CategoriasContext.Provider
          
        //Todo lo que este dentro del value fluirá en todos los componentes, esa es la funcionabilidad de UseContext para no pasar mediante props en cada componente
            value={{
                
                
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;