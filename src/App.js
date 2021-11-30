
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Blogs from './Pages/Blog/Blogs';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Navbar/Navigation';
import ViewDetails from './Pages/ViewDetails/ViewDetails';

function App() {


  return (
    <div >
      
    <Router>
    <Navigation></Navigation>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/blogs'>
          <Blogs></Blogs>
        </Route>
        <Route path='/details/:detailsId'>
          <ViewDetails></ViewDetails>
        </Route>
      </Switch>
      </Router>
   
    </div>
  );
}

export default App;




