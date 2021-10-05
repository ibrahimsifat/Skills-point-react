// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Languages from './components/Categories/Courses/Languages'
import IT from './components/Categories/Courses/IT'
import DataScience from './components/Categories/Courses/DataScience'
import Health from './components/Categories/Courses/Health'
import Math from './components/Categories/Courses/Math'
import Business from './components/Categories/Courses/Business'
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About'
import Why from './components/Why/Why';
function App() {
  return (
  <div>
  <BrowserRouter>
  <Header></Header>
  <Switch>
    <Route exact path='/'>
<Home></Home>
<Categories></Categories>
<Why></Why>
    </Route>
    <Route path='/home'>
<Home></Home>
<Categories></Categories>
<Why></Why>
</Route>

<Route path='/categoryes'>
<Categories></Categories>
    </Route>
<Route path='/about'>
<About></About>
    </Route>

    <Route path='/category/1'>
<Languages></Languages>
</Route>

    <Route path='/category/2'>
<IT></IT>
    </Route>
    <Route path='/category/3'>
<DataScience></DataScience>
    </Route>
    <Route path='/category/4'>
<Health></Health>
    </Route>
    <Route path='/category/5'>
<Math></Math>
    </Route>
    <Route path='/category/6'>
<Business></Business>
    </Route>
    
    <Route exact path='*'>
<NotFound></NotFound>
    </Route>
   

  </Switch>
  <Footer></Footer>
  </BrowserRouter>
    </div>
  );
}

export default App;
