import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routing from "./components/Routing";
import Navbar from "./components/Navbar";
import { CurrentUserContextProvider } from "./contexts/userContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CurrentUserContextProvider>
          <Navbar />
          <Routing />
        </CurrentUserContextProvider>
      </Router>
    </div>
  );
}

export default App;
