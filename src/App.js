import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import "./styles.css"
import "./styles/crash.css"
function App() {
  return (
    <div className="App">
      <div className="app-routes">
        <SideBar />
      </div>
      <div className="app-body">
        <div className="app-heading">
            <Navbar />
        </div>
        <div className="app-display">
          <Routes>
              {/* Home Route */}
              <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
