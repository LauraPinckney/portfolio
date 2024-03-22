import './styles/global.scss';
import { About, Contact, Footer, Headline, ProjectList } from './components';

export const App = () => {
  return (
    <div>
      <Headline />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
};
