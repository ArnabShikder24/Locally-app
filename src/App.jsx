import './App.css';
import Constraction from './pages/Constraction/Constraction';
import Registration from './pages/Registration/Registration';
import Registration1 from './pages/Registration/Registration1';
import Registration2 from './pages/Registration/Registration2';
import pathname from './routes';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={pathname.home} element={<Constraction />} ></Route>
        <Route path={pathname.registration} element={<Registration />} ></Route>
        <Route path={pathname.registration1} element={<Registration1 />} ></Route>
        <Route path={pathname.registration2} element={<Registration2 />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
