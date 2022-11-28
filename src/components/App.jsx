import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProjectSection from "./ProjectSection";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects";
import ThemeContext from "../context/ThemeContext";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <ThemeContext.Provider>
          <Header />
          <Route path="/" exact>
            <Hero />
            <About />
            <ProjectSection />
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
