import "./App.css";
import { Routes, Route } from "react-router-dom"
import Landing from "./components/Landing";
import WebDev from "./components/WebDev";
import Cysec from "./components/Cysec";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/cysec" element={ <Cysec/> } />
        <Route path="/WebDev" element={ <WebDev/> } />
      </Routes>
    </div>
  );
}

export default App;
