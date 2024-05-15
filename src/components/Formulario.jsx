import { useState, useContext } from "react";
import { ContextoTareas } from "../context/ContextoTareas";
import { MdOutlineSaveAlt } from "react-icons/md";

export const Formulario = () => {
  const [titulo, setTitulo] = useState("");
  const [articulo, setArticulo] = useState("");

  const { crearTarea } = useContext(ContextoTareas);

  const handleSubmit = (e) => {
    e.preventDefault();
    crearTarea({
      titulo,
      articulo,
    });
    setTitulo("");
    setArticulo("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <h1 className="text-2xl font-bold mb-3 text-white text-center">
          Crea tu tarea{" "}
        </h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="escribe el articulo"
          onChange={(e) => {
            setArticulo(e.target.value);
          }}
          className="bg-slate-300 p-3 w-full mb-2"
          value={articulo}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white">
        <MdOutlineSaveAlt />
        </button>
      </form>
    </div>
  );
};
