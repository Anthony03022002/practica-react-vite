import { ListaTareas } from "./components/ListaTareas";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <Formulario />
      <ListaTareas />
      </div>
    </main>
  );
}

export default App;
