import { useSelector, useDispatch }   from "react-redux"
import { setUser, clearUser }         from "./app/reducers/userSlice"

function App() {

  // Para poder modificar el state de redux necesito primero configurar el dispatch
  const dispatch = useDispatch();

  // Obtengo la información del state de redux
  const { name, email } = useSelector(state => state.user)

  // Con esta función modifico el store de redux
  const addUser = () => {
    // para añadir un nuevo usuario al estado de redux llamo al dispatch y le paso el payload con los datos nuevos
    const payload = {
      name: "Antonio",
      email: "info@lapizypluma.es"
    }

    dispatch(setUser(payload))
  }

  // Con esta función limpio el store de redux
  const deleteUser = () => {
    dispatch(clearUser())
  }

  return (
    <>
      <p>Nombre: {name}</p>
      <p>Email: {email}</p>

      <button onClick={() => addUser()}>Añadir usuario</button>
      &nbsp;&nbsp;
      <button onClick={() => deleteUser()}>Eliminar usuario</button>

      <br></br><br></br>
      <span>Recuerda que también puedes ver la información en la ventana de redux.</span>
    </>
  );
}

export default App;