import classes from "./App.module.scss"
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites/Favorites";
import Globe from "./pages/Globe/Globe";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/globe" element={<Globe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
