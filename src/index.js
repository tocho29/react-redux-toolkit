import React          from 'react';
import ReactDOM       from 'react-dom/client';
import App            from './App';
import { store }      from './app/store'
import { Provider }   from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 
    Configuracmos donde se va a guardar el store de la aplicación, es decir configuramos en que parte de nuestro programa
    va a estar accesible la información. En este caso lo hacemos en el fichero principal para que toda la información esté
    disponible desde cualquier parte de la aplicación.

    También es posible hacerlo en un componente concreto y que solo tenga acceso a redux ese componente y sus hijos, nietos, etc...

    Provider => es el contenedor que engloba toda la aplicación y donde se encuentra almacenado el state que nosotros creamos/configuramos
    store => es donde tenemos toda la información almacenada y con la que posteriormente vamos a trabajar
  */
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
