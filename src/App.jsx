// insert the import modules here
import Header from "./components/Header";
import Navbar from "./components/navbar";
import MainSearch from "./components/MainSearch";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz"; 
import AnswerCard from "./components/AnswerCard";

import "./index.css"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <MainSearch />
      <Quiz />
      <AnswerCard />
      <AnswerCard />
      <AnswerCard />
      <Footer />
          </>
  );
}

export default App;
