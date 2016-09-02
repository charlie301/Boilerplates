import React from 'react';
import {Link, IndexLink} from 'react-router';

class Base extends React.Component {
     render() {
          return (

               <div>

                    <div className="top-bar">

                         <div className="top-bar-left">
                              <IndexLink to="/">React App</IndexLink>
                         </div>

                         <div className="top-bar-right">
                              <Link to="/login"> Login </Link>
                              <Link to="/signup"> Sign up </Link>
                         </div>

                    </div>

                    { /* child comps rendered here */ }
                    {this.props.children}

               </div>

          ) //return end
     }
}

export default Base;
