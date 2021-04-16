import HomePage from './module/Home';
import AboutPage from './module/About';
import SkillPage from './module/Skill';
import ExperiencePage from './module/Experience';
import EducationPage from './module/Education';
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
      {/* <EducationPage /> */}
      <ContactPage />
    </main>
  );
}

export default App;
