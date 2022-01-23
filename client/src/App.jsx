import { Navbar, Welcome, Transaction, Services, Footer, Loader } from "./components"
import welcomGradeient from '../images/welcomeGradient.png';
import welcomeGradientMobile from '../images/welcomeGradientMobile.png';
import News from "./components/News";

import SendCrypto from './components/SendCrypto'

const App = () => {

  return (
    <div className="main-h-screen">
        <img src={welcomGradeient}  alt="gradient" className="fixed bg-gradient hidden sm:block  z-[-1]"/>
        <img src={welcomeGradientMobile}  alt="gradient" className="fixed sm:hidden w-[100vw] z-[-1]"/>
        <Navbar />
        <Welcome />
        <SendCrypto />
        <News />
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
};

export default App;
