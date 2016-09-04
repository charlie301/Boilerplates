import Base from './components/Base.jsx';
import Home from './components/Home.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';

//declare all routes
const routes = {

     //add main wrapper component
     component: Base,
     childRoutes: [

          {
               path: '/',
               component: 'Home'
          },
          {
               path: '/login',
               component: 'LoginForm'
          },
          {
               path: '/signup',
               component: 'SignUpForm'
          }

     ]
};

export default routes;
