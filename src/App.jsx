import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutDefault from "./Layouts/LayoutDefault";
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
        <Route path="generations" element={<AllGenerations />} />
        <Route path="generations/:id" element={<ShowGeneration />} />
        <Route path="types" element={<AllTypes />} />
        <Route path="types/:type" element={<ShowType />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
}

export default App
