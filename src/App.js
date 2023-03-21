import Home from './pages/home/Home';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Classes from './pages/classes/Classes';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Classes/>
      <Contact/>
      <About/>
    </div>
  );
}

export default App;
