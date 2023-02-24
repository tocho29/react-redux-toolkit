import { createSlice } from '@reduxjs/toolkit'

/*
    Este es el estado incial, o mejor dicho la configuración que vamos a usar para tener los datos estructurados.
    Aunque posteriormente se puede modificar la estructura añadiendo o eliminando secciones es recomendable tener
    preparados todos los campos aunque en algunos casos no se utilicen
*/
const initialState = {
    name: "",
    email: ""
}

// Empezamos a configurar este reducer...
export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        /*
            Aquí dentro vamos a tener las acciones. Estas Acciones van a modificar el estado inicial con la información del payload. Cuando hablamos del payload hablamos de un objeto literal donde tenemos la información que vamos a añadir/modificar en el state principal. 
        */
        setUser: (state, action) => {
            /*
                Esta función tiene 2 parámetros: state y action
                - state: recibe la nueva información que queremos añadir o modificar
                - action: nos permite modificar el estado con los datos que enviamos en el payload
            */
            state.name      = action.payload.name;
            state.email     = action.payload.email;
            // en este caso he modificado cada elemento del estado inicial obteniendo la información del payload
        },
        clearUser: (state) => {
            // en este caso no hay action ni payload devido que vamos hacer un reset del estado inicial
            state.name      = null;
            state.email     = null;
        }
    },
})

// Ahora exportamos las acciones que hemos ido creando antes...
export const { setUser, clearUser } = userSlice.actions

// Por último hacemos una exportación por defecto del reducer
export default userSlice.reducer