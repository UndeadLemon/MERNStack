import logo from './logo.svg';
import './App.css';
import Container from './views/Container';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import SingleView from './views/SingleView';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Container/>}/>
        <Route path="/single/:id" element={<SingleView/>}/>
    
    </Routes>
    </div>
  );
}

export default App;
