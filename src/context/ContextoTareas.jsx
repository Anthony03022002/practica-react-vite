import { createContext, useState, useEffect } from "react";
import { tareas as data } from "../data/tareas";


export const ContextoTareas = createContext()

export function ContextoTareasProvider(props) {
  const [tareas, setTareas] = useState([]);
  function crearTarea(tarea){
    setTareas([...tareas, {
      titulo: tarea.titulo,
      id: tareas.length,
      articulo: tarea.articulo 
    }])
  }

    function eliminarTareas(tareaId) {
      setTareas(tareas.filter(tarea => tarea.id !== tareaId))
    }

    useEffect(() => {
      setTareas(data);
    }, []);
  return (
    <ContextoTareas.Provider value={{
      tareas,
      eliminarTareas,
      crearTarea
    }}>
      {props.children}
    </ContextoTareas.Provider>
  )
}

