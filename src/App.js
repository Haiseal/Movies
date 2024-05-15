import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Favorites from "./components/Favorites";
import Pagination from "./components/Pagination";
import Login from "./components/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import WatchPage from "./components/WatchPage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Movies></Movies>
                <Pagination></Pagination>
              </>
            }
          ></Route>
          <Route path="/fav" element={
            <Favorites></Favorites>
          }></Route>
          <Route path="/login" element={
            <Login></Login>
          }></Route>
          <Route path="/signUp" element={
            <SignUp></SignUp>
          }></Route>
          <Route path="/watchPage" element={
            <WatchPage></WatchPage>
          }></Route>
          <Route path="/adminPage" element={
            <AdminPage></AdminPage>
          }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
