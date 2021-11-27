import './App.css';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Register from './component/Register/Register';
import AuthProvider from './context/AuthProvider';
import About from './component/About/About';
import Details from './component/Details/Details';
import PrivateRoute from './Private/PrivateRoute';
import Foot from './Foot/Foot';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>

            <PrivateRoute path='/details/:id'>
              <Details></Details>
            </PrivateRoute>
            <Route path='/register'>
              <Register></Register>

            </Route>
            <Route path='*'>
              <NotFound></NotFound>

            </Route>
          </Switch>
        </BrowserRouter>
        <Foot />
      </AuthProvider>

    </div>
  );
}

export default App;
