import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Drivers from "./pages/Drivers";
import Teams from "./pages/Teams";
import ReactionGame from "./pages/ReactionGame";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/reaction-game" element={<ReactionGame />} />
    </Routes>
  );
}

export default App;
