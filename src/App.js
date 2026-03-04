import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <div>
            <MainContent />
        </div>
        <Footer />
    </div>
  );
}

export default App;
