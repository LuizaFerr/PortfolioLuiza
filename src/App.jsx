import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Profile from './componets/Profile';
import About from './componets/About';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar /><Profile /></>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;