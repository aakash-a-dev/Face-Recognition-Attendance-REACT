import { Navbar, Hero, Body, Footer, Services, Team } from "./components";


const App = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Hero />
      <Body />
      <Team />
    </div>
    <Footer />
  </div>
  );
}

export default App