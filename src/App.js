// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Alert from './components/Alert';

import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import Regional from './regional/Regional';
import Subregion from './regional/Subregion';
import Regrecipelist from './regional/regionalRecipes/Regrecipelist';
import Regrecipedetails from './regional/regionalRecipes/Regrecipedetails';
import About from './pages/About';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <Router>
      <NavBar />
      
      {/* Alert positioned below navbar */}
      <div className="alert-container">
        <div className="alert-content">
          <Alert alert={alert} />
        </div>
      </div>
      <Routes>
          <Route path="/" element={<Login showAlert={showAlert} />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About showAlert={showAlert} />} />
          <Route path="/signup" element={<Signup showAlert={showAlert} />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="/regional" element={<Regional />} />
          <Route path='/subregion' element={<Subregion />} />
          <Route path='/subregion/regionalrecipes' element={<Regrecipelist />} />
          <Route path='/subregion/regionalrecipes/:recipeId' element={<Regrecipedetails />} />
        </Routes>
    </Router>
  );
}

export default App;
