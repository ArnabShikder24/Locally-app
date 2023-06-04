import './App.css';
import Constraction from './pages/Constraction/Constraction';
import Registration from './pages/Registration/Registration';
import pathname from './routes';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={pathname.home} element={<Constraction />} ></Route>
        <Route path={pathname.registration} element={<Registration />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
