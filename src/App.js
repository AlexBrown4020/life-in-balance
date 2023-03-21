import Home from './pages/home/Home';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Classes from './pages/classes/Classes';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Classes/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
