import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import AllPokemon from "./pages/AllPokemon";
import ShowPokemon from "./pages/ShowPokemon";
import AllGenerations from "./pages/AllGenerations";
import ShowGeneration from "./pages/ShowGeneration";
import AllTypes from "./pages/AllTypes";
import ShowType from "./pages/ShowType";
function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route index element={<Home />} />
        <Route path="pokemon" element={<AllPokemon />} />
        <Route path="pokemon/:name" element={<ShowPokemon />} />
        <Route path="generazioni" element={<AllGenerations />} />
        <Route path="generazioni/:id" element={<ShowGeneration />} />
        <Route path="tipi" element={<AllTypes />} />
        <Route path="tipi/:type" element={<ShowType />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App
