import "./App.css";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import Favorites from "./components/Favorites";
import Pagination from "./components/Pagination";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
