import './App.css';
import { Navbar } from "./components";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Smenu, } from './container';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Smenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
