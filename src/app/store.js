/*
    Aquí es donde configuramos el store donde vamos a ir almacenando la información que luego iremos usando a lo largo de la aplicación.
    
    Cuando hablamos del store recuerda visualizarlo como un supermercado, donde tenemos diferentes secciones: carnes, verduras, lácteos, limpieeza...
    y dentro de cada sección tenemos los diferentes productos con sus diferentes marcas, precios, características, etc...
*/
import { configureStore }   from '@reduxjs/toolkit'
import userSlice            from './reducers/userSlice'

export const store = configureStore({
    /*
        Dentro de reducer se van a ir metiendo todos los reducers que vamos a ir creando. Siguiendo el ejemplo del supermercado
        los reducers serían las diferentes secciones donde aparecen los productos por el tipo
    */
    reducer: {
        user: userSlice
    },
})