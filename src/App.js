import './styles/global.scss';
import {
  About,
  Contact,
  Footer,
  ProjectList,
  UnderConstruction,
} from './components';

export const App = () => {
  return (
    <div>
      <UnderConstruction />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
};
