import React, {Component} from 'react';
import {browserHistory} from 'react-router';


class CarDetail extends Component {

     handleRedirect(){
          browserHistory.push('/cars');
     }


     /* MAIN RENDER COMPONENET
     ========================*/

     render(){
          //Car array passed into route parameter
          const cars = this.props.route.data;
          //Car id from route parameter
          const id = this.props.params.id;
          //Filter car to find matching id
          const car = cars.filter((car)=>{
               if(id == car.id){

                    console.log(car);
                    return car;

               }
          });


          /* Be sure to append [0] to car object returned from above for
             correct rendering purposes below. */
          return(
               <div>
                  <h1>{car[0].name}</h1>
                  <div className="row">
                      <div className="col-sm-6 col-md-4">
                          <div className="thumbnail">
                              <img src={car[0].media} alt={car[0].name} />
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                         <ul>
                              <li><strong>Model</strong>: {car[0].model}</li>
                              <li><strong>Make</strong>: {car[0].make}</li>
                              <li><strong>Year</strong>: {car[0].year}</li>
                              <li><strong>Price</strong>: {car[0].price}</li>
                              <button className="btn btn-warning"
                                      onClick={this.handleRedirect.bind(this)} >
                                      Go back
                              </button>
                         </ul>
                      </div>
                  </div>
               </div>
          )

     }

}

export default CarDetail;
