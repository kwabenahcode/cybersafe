import './App.css';
import Header from './Components/Navbar/Header';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Resources from './Pages/Resources/Resources';
import Login from './Components/Login/Login';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/courses' Component={Courses}/>
          <Route path='/resources' Component={Resources} />
          <Route path='/login' Component={Login} />
        </Routes>
      </Router>

  );
}

export default App;
