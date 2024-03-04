import './App.css';
import { About, Contact, Footer, Navbar } from './components';

export const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
