import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewNiche from "./NewNiche";
import NicheDetails from "./NicheDetails";
import Notfound from "./NotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
          <div className="content-page">
            <Routes>
              <Route exact path='/' element= {<Home />} />
              <Route path='/newniche' element= {<NewNiche />} />
              <Route path='/niche/:id' element= {<NicheDetails />} />
              <Route path='*' element= {<Notfound />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
