import Home from './pages/home/Home';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Classes from './pages/classes/Classes';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Classes/>
      <Contact/>
    </div>
  );
}

export default App;
