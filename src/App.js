import HomePage from './module/Home';
import AboutPage from './module/About';
import SkillPage from './module/Skill';
import ExperiencePage from './module/Experience';
import ServicesPage from './module/Services';
import ContactPage from './module/Contact';
import AppBar from './components/Appbar';
import { ScrollContainer, ScrollPage} from "react-scroll-motion";
function App() {
  return (
    <main>

      <div id="home">
      <AppBar />
      <HomePage />
      </div>
      <div id="about">
      <AboutPage />
      <SkillPage />
      </div>
      <div id="resume">
      <ExperiencePage />
      <ServicesPage />
      </div>
      <div id="contact">
      <ContactPage />
      </div>

    </main> 
  );
}

export default App;
