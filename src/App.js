
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Route, Switch } from 'react-router';
import { Home } from './Components/Home/Home';
import { AboutMe } from './Components/AboutMe/AboutMe'
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Switch>

      <Route exact path="/"><Home/></Route>
      <Route path="/about"><AboutMe/></Route>
      <Route path="/projects"><Projects/></Route>
      <Route path="/contact"><Contact/></Route>

      </Switch>
    </div>
  );
}

export default App;
