import "./App.css";
import { Routes, Route } from "react-router-dom"
import Landing from "./components/Landing";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={ <Landing/> } />
      </Routes>
    </div>
  );
}

export default App;
