import "./App.css";
import Navbar from "./Navbar";
import Ask from "./Ask";
import Quiz from "./Quiz";
import Yoga from "./Yoga";

import Navbaroverlay from "./Navbar-overlay";
function App() {
  return (
    <div className="App">
      <Navbaroverlay />
      <Navbar />
      <Quiz />
      <Ask />
      <Yoga />
    </div>
  );
}

export default App;
