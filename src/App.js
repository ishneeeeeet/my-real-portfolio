import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500>
      <Navbar />
      <Home />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
