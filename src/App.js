import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Resources from './Pages/Resources';

function App() {
  return (
    <>
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/Dashboard" exact element={<Dashboard />}></Route>
        <Route path="/Resources" exact element={<Resources />}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}


export default App;
