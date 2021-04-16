import HomePage from './module/Home';
import AboutPage from './module/About';
import SkillPage from './module/Skill';
import ExperiencePage from './module/Experience';
import ServicesPage from './module/Services';
import ContactPage from './module/Contact';
import AppBar from './components/Appbar';
function App() {
  return (
    <main>
      <AppBar />
      <HomePage />
      <AboutPage />
      <SkillPage />
      <ExperiencePage />
      <ServicesPage />
      <ContactPage />
    </main>
  );
}

export default App;
