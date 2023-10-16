import './App.css';
import LandingPage from './components/LandingPage';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';

function App() {
  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <NavBar scrollToComponent={scrollToComponent} />
      <LandingPage scrollToComponent={scrollToComponent} />
      <Footer scrollToComponent={scrollToComponent} />
    </div>
  );
}

export default App;
