import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import ProjDeck from './ProjectDeck';

function Main() {
  return (
    <>
      <main>
        <Services />
        <About />
        <ProjDeck/>
        <Contact />
      </main>
    </>
  );
}
export default Main;
