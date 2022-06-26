import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Projects from "./components/projects";
import Aboutme from "./components/aboutme";
import Contact from "./components/contact";
import "./App.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#dfe6e9",
        width: "100vw",
        height: "100%",

        backgroundRepeat: "no-repeat",
      }}
      className="App"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/aboutme" element={<Aboutme />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <footer style={{ marginTop: "20px", padding: "20px" }}>
        Made with ❤️ using React and Material UI
      </footer>
    </div>
  );
}

export default App;
