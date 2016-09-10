import React, {Component} from 'react';
import {Link} from 'react-router';

class Car extends Component {


          render(){
               console.log('This is the data' + this.props.route.data);

          //Retrieve data from props.route (passed into route)
          const cars = this.props.route.data;

          const carNode = cars.map((car) => {
               return(
                    <div className="list-group-item clearfix" key={car.id}>
                         <p> {car.name} </p>
                         <div>
                         <button className="btn pull-right">
                              <Link to={"/cars/"+car.id} >
                                   view
                              </Link>
                         </button>
                    </div>
                    </div>
               )
          });

          return (
               <div>
                    <h1> Cars page </h1>
                    <div className="list-group">
                         {carNode}
                    </div>
               </div>
          );
     }
}

export default Car;


/* STATIC STUB DATA FOR EXAMPLE PURPOSE
======================================*/
