import './App.css';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Resources from './Pages/Resources/Resources';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/courses' Component={Courses}/>
          <Route path='/resources' Component={Resources} />
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={SignUp} />
          <Route path="/dashboard" element={<PrivateRoute><Resources /></PrivateRoute>} 
        />
        </Routes>
      </Router>

  );
}

export default App;
