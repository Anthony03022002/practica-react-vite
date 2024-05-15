import { useContext } from "react";
import { ContextoTareas } from "../context/ContextoTareas";

export function CartaTareas({ tarea }) {
  const { eliminarTareas } = useContext(ContextoTareas);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tarea.titulo}</h1>
      <p className="text-gray-500 text-sm">{tarea.articulo}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => eliminarTareas(tarea.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}
