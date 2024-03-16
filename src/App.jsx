// insert the import modules here
import navbar from "./components/navbar";
import Header from "./components/Header";
import MainSearch from "./components/MainSearch";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Divider from "./components/Divider";


import "./index.css";

function App() {
  return (
    <>
      <navbar />
      <Header />
      <MainSearch />
      <Divider />
      <Quiz />
      <Divider />
      <Footer />
    </>
  );
}

export default App;
