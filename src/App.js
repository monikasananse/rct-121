
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Image from "./components/Image";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <Image/>
      <Footer/>
    </div>
  );
}

export default App;
