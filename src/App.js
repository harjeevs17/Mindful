import logo from './logo.svg';
import './App.css';
import Main from './page/Main';
import Breathe from './page/Breathe';
import Quiz from './page/Quiz';
import { Route, Router, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import Wheel from './page/Wheel';
function App() {
  const Routing = () => {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/breathe" element={<Breathe />} />
        <Route path="/selfHelp" element={<Quiz />} />
        <Route path="/knowYourEmotions" element={<Wheel />} />
      </Routes>
    )
  }
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
