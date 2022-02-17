import "./App.css";
import ListCards from "./Views/Components/ListCards";
import Footer from "./Views/Components/Footer";

import NavBar from "./Views/Components/NavBar";

function App() {
  return (
    <div>
        <NavBar/>
        <ListCards/>
        <Footer/>
    </div>
    
  );
}

export default App;
