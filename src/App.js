
import './App.css';
import { Analytics } from './components/Analytics';
import { Projects } from './components/Projects';
import { Sidebar } from './components/Sidebar';
import { CodingCompetitions } from './components/CodingCompetitions';
import { Navbar } from './components/Navbar';
import { Menubar } from './components/Menubar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Menubar/>  
        <Navbar/>
        <Routes>  
          <Route exact path="/" element={<Analytics/>} />
          <Route exact path="/codingcomp" element={<CodingCompetitions/>} />
          <Route exact path="/projects" element={<Projects/>}/>
        </Routes>
        <Sidebar/>
      </Router>
    </>
  );
}

export default App;

