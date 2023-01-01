import classes from "./App.module.scss"
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Globe from "./pages/Globe/Globe";
import NavBar from "./components/NavBar";
import Maps from "./pages/Maps/Maps";


function App() {
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/globe" element={<Globe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
