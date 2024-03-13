import './styles/global.scss';
import { About, Contact, Footer, ProjectList } from './components';

export const App = () => {
  return (
    <div>
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
};
