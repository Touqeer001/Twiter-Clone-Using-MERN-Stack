import "./App.css";
import Home from "./componets/Pages/Home";
import Login from "./componets/Pages/Login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./componets/Pages/Login/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
