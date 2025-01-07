import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas.jsx';
import Tarea from "./componentes/Tarea.jsx"
import TareaFormulario from './componentes/TareaFormulario.jsx';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        {/* <Tarea texto="Aprender React"/> */}
        {/* <TareaFormulario/> */}
        <ListaDeTareas/>
      </div>

    </div>
  );
}

export default App;
