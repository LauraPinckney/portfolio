import './styles/global.scss';
import {
  About,
  Contact,
  Footer,
  Headline,
  ProjectList,
  UnderConstruction,
} from './components';

export const App = () => {
  return (
    <div>
      <UnderConstruction />
      <Headline />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
};
