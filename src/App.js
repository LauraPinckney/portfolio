import './styles/global.scss';
import {
  About,
  Contact,
  Footer,
  NavBar,
  ProjectList,
  UnderConstruction,
} from './components';

export const App = () => {
  return (
    <div>
      {/* <UnderConstruction /> */}
      <NavBar />
      <About />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
};
