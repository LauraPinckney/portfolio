import './styles/global.scss';
import {
  Headline,
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
      <Headline />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
};
