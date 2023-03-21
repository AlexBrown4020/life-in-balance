import Home from './pages/home/Home';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Classes from './pages/classes/Classes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Classes/>
    </div>
  );
}

export default App;
