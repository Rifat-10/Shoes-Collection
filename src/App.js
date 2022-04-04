import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllReviews from './components/AllReviews/AllReviews';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/allReviews" element={<AllReviews></AllReviews>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;