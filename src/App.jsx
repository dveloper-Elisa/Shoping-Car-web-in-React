import "./App.css";
import Navigation from "./componets/navigation";
import Advant from "./componets/advant";
import Home from "./pages/home";
import Collection from "./pages/correction";
import Newcars from "./componets/newCars";
import Footer from "./componets/footer";
import Contact from "./componets/contactus";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Collection />
      <Advant />
      <Newcars />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
