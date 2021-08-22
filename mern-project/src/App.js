import './App.css';
import { Route } from 'react-router';
import { Switch } from 'react-router';
import Home from './views/home';
import About from './views/about';
import SignUp from './views/registration/signUp';
import Unknown from './views/unknown';
import SignIn from './views/registration/signIn';
import { useSelector } from 'react-redux';
import PrivateRoute, { AntiPrivateRoute } from './privateRoute';
function App() {
  const state = useSelector(state => state.reducer)
  return (
    <div className={state ? "dark" : ""}>
      <div className='dark:bg-gray-800 dark:text:white'>
        <div className='z-10'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about'>
              <PrivateRoute >
                <About />
              </PrivateRoute>
            </Route>
            <Route exact path='/registration'  >
              <AntiPrivateRoute>
                <SignUp />
              </AntiPrivateRoute>
            </Route>
            <Route exact path='/login'  >
              <AntiPrivateRoute>
                <SignIn />
              </AntiPrivateRoute>
            </Route>
            <Route exact path='/*' component={Unknown} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
