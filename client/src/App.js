import "./App.css";
import Home from "./componets/Pages/Home";
import Login from "./componets/Pages/Login/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./componets/Pages/Login/Signup";
import ProtectedRoute from "./componets/Pages/ProtectedRoute";
import PageLoading from "./PageLoading";
import Feed from "./componets/Pages/Feed/Feed";
import Explore from "./componets/Pages/Explore/Explore";
import Notification from "./componets/Pages/Notification/Notification";
import Bookmarks from "./componets/Pages/Bookmarks/Bookmarks";
import List from "./componets/Pages/List/List";
import Profile from "./componets/Pages/Profile/Profile";
import More from "./componets/Pages/More/More";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home></Home>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home></Home>
              </ProtectedRoute>
            }
          >
            {/* <Route path="feed" element={<Feed />}></Route> */}
            <Route path="explore" element={<Explore />}></Route>
            <Route path="notification" element={<Notification />}></Route>
            <Route path="bookmarks" element={<Bookmarks />}></Route>
            <Route path="list" element={<List />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="more" element={<More />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
            path="/loading-page"
            element={<PageLoading></PageLoading>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
