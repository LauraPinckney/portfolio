import './styles/global.scss';
import { About, Contact, Footer, Navbar, ProjectComponent } from './components';

export const App = () => {
  return (
    <div>
      <About />
      <ProjectComponent />
      <Contact />
      <Footer />
    </div>
  );
};
