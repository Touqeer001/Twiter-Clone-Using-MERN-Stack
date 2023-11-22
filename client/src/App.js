import "./App.css";
import Home from "./componets/Pages/Home";
import Login from "./componets/Pages/Login/Login";
import {Routes,Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      
      </BrowserRouter>
        
        <Home></Home>
        <Login></Login>
     
    </div>
  );
}

export default App;
