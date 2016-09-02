import React from 'react';
import Link from 'react-router';
import {Card, CardTitle, CardText, RaisedButton, TextField} from 'material-ui';

class SignUpForm extends React.Component {

     processForm(e){
          e.preventDefault();
          console.log('name is ', this.refs.name.getValue());
          console.log('email is ', this.refs.email.getValue());
          console.log('password is ', this.refs.password.getValue());
     }

     render(){
          return(
               <Card className="container">
                    <form action="/" onSubmit={this.processForm.bind(this)}>

                         <h2 className="card-heading">Sign Up </h2>

                          <CardTitle title="Sign up with email" />

                          <div className="field-line">
                               <TextField ref="name" floatingLabelText="Name" />
                          </div>

                          <div className="field-line">
                               <TextField ref="email" floatingLabelText="Email" />
                          </div>

                          <div className="field-line">
                               <TextField ref="password" floatingLabelText="Password" />
                          </div>

                          <div className="button-line">
                               <RaisedButton type="submit" label="Create new account"
                                    primary={true} />
                          </div>

                          <CardText>Already have an account? <Link to={'/login'}>
                               Log In </Link></CardText>

                     </form>
               </Card>
          )
     }

}
