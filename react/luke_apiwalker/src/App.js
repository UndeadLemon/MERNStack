
import './App.css';
import NavBar from './components/NavBar';
import DisplayPerson from './components/DisplayPerson';
import DisplayPlanet from './components/DisplayPlanet';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/people/:id" element={<DisplayPerson/>} />
        <Route path="/planets/:id" element={<DisplayPlanet/>} />
        <Route path="/error" element = {<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
