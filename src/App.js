import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Testimonials from './components/Testimonials/Testimonials';
import Whyus from './components/Whyus/Whyus';


function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Whyus/>
        <Plans/>
        <Testimonials/>
        <Join/>
        <Footer/>
    </div>
  );
}

export default App;
