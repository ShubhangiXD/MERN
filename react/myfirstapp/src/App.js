import Hello from './components/Greet';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hello />
      <Footer />
    </div>
  );
}

export default App;
