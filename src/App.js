import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Menu from './components/pages/Menu'
import User from './components/pages/User'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import PageNotFound  from './components/pages/PageNotFound';

function App() {


  return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/User" component={User} />
          <Route path="/Company" component={Company} />
          <Route path="/Contact" component={Contact} />
          <Route component={PageNotFound} />
          
        </Switch>

      </Router>

  );
}

export default App;
