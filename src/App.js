import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main';
import AboutContent from './components/pages/sub-pages/AboutContent';
import Academic from './components/pages/sub-pages/Academic';
import Admission from './components/pages/sub-pages/Admission';
import Approach from './components/pages/sub-pages/Approach';
import Fee from './components/pages/sub-pages/Fee';
import Contact from './components/pages/sub-pages/Contact';
function App() {

  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<AboutContent/>}/>
        <Route path="/academic" element={<Academic/>}/>
        <Route path="/admission" element={<Admission/>}/>
        <Route path="/approach" element={<Approach/>}/>
        <Route path="/fee" element={<Fee/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
