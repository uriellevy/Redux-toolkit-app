import classes from "./App.module.scss"
import Home from "./pages/Home/Home";


function App() {
  return (
    <div className={classes.app}>
      <Home/>
    </div>
  );
}

export default App;
