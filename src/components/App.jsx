import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProjectSection from "./ProjectSection";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./Projects";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
