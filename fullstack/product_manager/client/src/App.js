import logo from './logo.svg';
import './App.css';
import Container from './views/Container';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import SingleView from './views/SingleView';
import EditView from './views/EditView';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Container/>}/>
        <Route path="/:id/view" element={<SingleView/>}/>
        <Route path="/:id/edit" element={<EditView/>}/>
        
    </Routes>
    </div>
  );
}

export default App;
