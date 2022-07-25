import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Pages/Header";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
