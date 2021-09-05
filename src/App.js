import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRouter />
        <Subscribe />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
