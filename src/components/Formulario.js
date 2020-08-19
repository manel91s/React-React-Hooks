//Importamos el useContext para empezar a consumir nuestro Context
import React, { useContext, useState } from 'react';

//Importamos el Context creado
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState({
        nombre : '',
        categoria : ''
    });

    //Una vez importado el context lo consumimos mediante useContext y cogemos el state
    const { categorias } = useContext(CategoriasContext);

    const {nombre , categoria } = busqueda;

    console.log(nombre);
    console.log(categoria);

    

    return ( 
        <form
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        onChange = {(e) => { guardarBusqueda({ ...busqueda, [e.target.name] : e.target.value } ) } }
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        value={nombre}
                    />
                </div>

                <div className="col-md-4">
                    <select
                         onChange = {(e) => { guardarBusqueda( {...busqueda, [e.target.name] : e.target.value }) } }
                        className="form-control"
                        name="categoria"
                        value={categoria}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria =>(
                        <option 
                            key={categoria.strCategory} 
                            value={categoria.strCategory}
                        >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;