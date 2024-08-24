import './App.css';
import Header from './Components/Navbar/Header';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/courses' Component={Courses}/>
        </Routes>
      </Router>

  );
}

export default App;
