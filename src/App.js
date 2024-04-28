import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Movies></Movies>
      <Pagination></Pagination>
    </>
    
  );
}

export default App;
