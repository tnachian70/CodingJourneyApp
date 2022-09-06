import './style_sheets/App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// components
import Homepage from './components/Homepage';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
