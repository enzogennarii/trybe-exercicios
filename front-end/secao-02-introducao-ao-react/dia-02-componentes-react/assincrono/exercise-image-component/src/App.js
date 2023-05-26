import Image from './components/Image';
import cat from './img/cat.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Image source={cat} alternativeText="Cute cat staring" />
    </div>
  );
}

export default App;
