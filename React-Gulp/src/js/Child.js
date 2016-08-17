var Child = React.createClass({
     render: function(){
          return (
               <div>
                    and this yah is the <b>{this.props.name}</b>
               </div>
          )
     }
});

var Table = React.createClass({
     render: function(){
          return(
               <table className="table">
               <tr>
                 <th>Firstname</th>
                 <th>Lastname</th>
                 <th>Age</th>
               </tr>
               <tr>
                 <td>Jill</td>
                 <td>Smith</td>
                 <td>50</td>
               </tr>
               <tr>
                 <td>Eve</td>
                 <td>Jackson</td>
                 <td>94</td>
               </tr>
               </table>
          )
     }
});

var Name = React.createClass({
     render: function(){
          return(
               <div>
                    <h1> Hi there </h1>
               </div>
          )
     }
});

var Appoint = React.createClass({

     getInitialState: function(){
          return {
               time1: 'Crayford',
               moving: true
          }
     },
     render: function(){

          var display = {
               color: this.state.moving ? 'green' : 'red'
          }

          return (
               <div className="center-block">
                    <h1> Current locations </h1>
                    <h2>
                         {this.state.moving ? 'Moving' : 'Stationary'}
                    </h2>
                    <ol style={display}>
                         <li><b>20:30</b>: Bexleyheath</li>
                         <li><b>20:40</b>: {this.state.time1}</li>
                         <li><b>20:50</b>: Greenhithe</li>
                    </ol>
               </div>
          )
     }
});

/*   complex data call via AJAC
========================================*/

//Basic data loaded from inline JSON
var Complex = React.createClass({

     getInitialState: function(){
          return {
               bars: []
               }
     },

     //Ajax call on the intial load
     componentDidMount: function(){
          this.serverRequest = $.get('data.json', function(result){
               var barList = result;
               this.setState({
                    bars: barList
               })//end of setState
          }.bind(this));
     },

     //End of life call
     componentWillUnmount: function(){
          this.serverRequest.abort();
     },

     //All functions above bar unmount performed prior to render:
     render: function(){

          var details = this.state.bars;
          details = details.map(function(item,index){
               return(
                    <tr key={index}>
                    <td>{this.state.bars[index].name}</td>
                    <td>{this.state.bars[index].area}</td>
                    <td>{this.state.bars[index].price}</td>
                    <td>{this.state.bars[index].url}</td>
                    </tr>
               )
          }.bind(this));

          return (
               <div className="center-block">
                    <div className="panel panel-default">
                         <div className="panel-body">
                              <table className="table table-striped">
                                   <tr>
                                        <th>Name</th>
                                        <th>OwnerName</th>
                                        <th>Appointment Date</th>
                                        <th>Appointment Notes</th>
                                   </tr>
                                   <tbody>{details}</tbody>
                              </table>
                         </div>
                    </div>
               </div>
          )
     }
});



//Complex data from inline JSON
var ComplexAjax = React.createClass({

     getInitialState: function(){
          return {
               data:
                    [
                      {
                        "petName": "Buffy",
                        "ownerName": "Hassum Harrod",
                        "aptDate": "2016-06-20 15:30",
                        "aptNotes": "This Chihuahua has not eaten for three days and is lethargic"
                      },
                      {
                        "petName": "Spot",
                        "ownerName": "Constance Smith",
                        "aptDate": "2016-06-24 08:30",
                        "aptNotes": "This German Shepherd is having some back pain"
                      },
                      {
                        "petName": "Goldie",
                        "ownerName": "Barot Bellingham",
                        "aptDate": "2016-06-22 15:50",
                        "aptNotes": "This Goldfish has some weird spots in the belly"
                      },
                      {
                        "petName": "Mitten",
                        "ownerName": "Hillary Gssoldwyn",
                        "aptDate": "2016-06-21 9:15",
                        "aptNotes": "Cat has excessive hairballs"
                      }
                    ]
               }
     },
     render: function(){

          //map JSON response into table data
          var details = this.state.data;
          details = details.map(function(item,index){
               return(
                    <tr key={index}>
                    <td>{this.state.data[index].petName}</td>
                    <td>{this.state.data[index].ownerName}</td>
                    <td>{this.state.data[index].aptDate}</td>
                    <td>{this.state.data[index].aptNotes}</td>
                    </tr>
               )
          }.bind(this));

          return (
               <div className="center-block">
                    <div className="panel panel-default">
                         <div className="panel-body">
                              <table className="table table-striped">
                                   <tr>
                                        <th>Name</th>
                                        <th>OwnerName</th>
                                        <th>Appointment Date</th>
                                        <th>Appointment Notes</th>
                                   </tr>
                                   <tbody>{details}</tbody>
                              </table>
                         </div>
                    </div>
               </div>
          )
     }
});
