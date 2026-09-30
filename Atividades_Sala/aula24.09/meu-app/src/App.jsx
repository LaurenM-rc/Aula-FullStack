// src/App.jsx
import Header from './components/Header';
import Banner from './components/Sobre';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* outras seções da página entram aqui */}
      <Footer />
    </div>
  );
}

export default App;