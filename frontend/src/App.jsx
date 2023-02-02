import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routing from "./components/Routing";
import Navbar from "./components/Navbar";
import { CurrentUserContextProvider } from "./contexts/userContext";
import { CurrentOrderContextProvider } from "./contexts/orderContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CurrentUserContextProvider>
          <CurrentOrderContextProvider>
            <Navbar />
            <Routing />
          </CurrentOrderContextProvider>
        </CurrentUserContextProvider>
      </Router>
    </div>
  );
}

export default App;
