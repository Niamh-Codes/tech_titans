// insert the import modules here
import Header from "./components/Header";
import Navbar from "./components/navbar";
import MainSearch from "./components/MainSearch";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz"; 
import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <MainSearch />
      <Quiz />
      <Footer />
          </>
  );
}

export default App;
