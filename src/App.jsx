import "./App.scss";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
