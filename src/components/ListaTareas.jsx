import { CartaTareas } from "./CartaTareas";
import { useContext } from "react";
import { ContextoTareas } from "../context/ContextoTareas";

export const ListaTareas = () => {


  const {tareas} = useContext(ContextoTareas)

  if (tareas.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tareas.map((tarea) => (
        <CartaTareas key={tarea.id} tarea = {tarea} />
      ))}
    </div>
  );
};
