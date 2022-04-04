import { Route, Routes } from 'react-router-dom';
import './App.css';
import Friends from './components/Friend/Friends';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
    <h1>Welcome to my site</h1>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/friends" element={<Friends></Friends>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
