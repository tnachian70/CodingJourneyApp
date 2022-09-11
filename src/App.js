import './style_sheets/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// components
import Homepage from './pages/Homepage';
// import Login from './components/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
