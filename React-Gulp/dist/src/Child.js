var Child = React.createClass({displayName: "Child",
     render: function(){
          return (
               React.createElement("div", null, 
                    "and this yah is the ", React.createElement("b", null, this.props.name)
               )
          )
     }
});

var Table = React.createClass({displayName: "Table",
     render: function(){
          return(
               React.createElement("table", {className: "table"}, 
               React.createElement("tr", null, 
                 React.createElement("th", null, "Firstname"), 
                 React.createElement("th", null, "Lastname"), 
                 React.createElement("th", null, "Age")
               ), 
               React.createElement("tr", null, 
                 React.createElement("td", null, "Jill"), 
                 React.createElement("td", null, "Smith"), 
                 React.createElement("td", null, "50")
               ), 
               React.createElement("tr", null, 
                 React.createElement("td", null, "Eve"), 
                 React.createElement("td", null, "Jackson"), 
                 React.createElement("td", null, "94")
               )
               )
          )
     }
});

var Name = React.createClass({displayName: "Name",
     render: function(){
          return(
               React.createElement("div", null, 
                    React.createElement("h1", null, " Hi there ")
               )
          )
     }
});

var Appoint = React.createClass({displayName: "Appoint",

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
               React.createElement("div", {className: "center-block"}, 
                    React.createElement("h1", null, " Current locations "), 
                    React.createElement("h2", null, 
                         this.state.moving ? 'Moving' : 'Stationary'
                    ), 
                    React.createElement("ol", {style: display}, 
                         React.createElement("li", null, React.createElement("b", null, "20:30"), ": Bexleyheath"), 
                         React.createElement("li", null, React.createElement("b", null, "20:40"), ": ", this.state.time1), 
                         React.createElement("li", null, React.createElement("b", null, "20:50"), ": Greenhithe")
                    )
               )
          )
     }
});

/*   complex data call via AJAC
==============================================================================*/

//Basic data loaded from inline JSON
var Complex = React.createClass({displayName: "Complex",

     getInitialState: function(){
          return {
               bars: []
               }
     },

     //Ajax call on the intial load - Called only one beforew rendering
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
                    React.createElement("tr", {key: index}, 
                    React.createElement("td", null, this.state.bars[index].name), 
                    React.createElement("td", null, this.state.bars[index].area), 
                    React.createElement("td", null, this.state.bars[index].price), 
                    React.createElement("td", null, this.state.bars[index].url)
                    )
               )
          }.bind(this));

          return (
               React.createElement("div", {className: "center-block"}, 
                    React.createElement("div", {className: "panel panel-default"}, 
                         React.createElement("div", {className: "panel-body"}, 
                              React.createElement("table", {className: "table table-striped"}, 
                                   React.createElement("tr", null, 
                                        React.createElement("th", null, "Name"), 
                                        React.createElement("th", null, "OwnerName"), 
                                        React.createElement("th", null, "Appointment Date"), 
                                        React.createElement("th", null, "Appointment Notes")
                                   ), 
                                   React.createElement("tbody", null, details)
                              )
                         )
                    )
               )
          )
     }
});



//Complex data from inline JSON
var ComplexAjax = React.createClass({displayName: "ComplexAjax",

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
                    React.createElement("tr", {key: index}, 
                    React.createElement("td", null, this.state.data[index].petName), 
                    React.createElement("td", null, this.state.data[index].ownerName), 
                    React.createElement("td", null, this.state.data[index].aptDate), 
                    React.createElement("td", null, this.state.data[index].aptNotes)
                    )
               )
          }.bind(this));

          return (
               React.createElement("div", {className: "center-block"}, 
                    React.createElement("div", {className: "panel panel-default"}, 
                         React.createElement("div", {className: "panel-body"}, 
                              React.createElement("table", {className: "table table-striped"}, 
                                   React.createElement("tr", null, 
                                        React.createElement("th", null, "Name"), 
                                        React.createElement("th", null, "OwnerName"), 
                                        React.createElement("th", null, "Appointment Date"), 
                                        React.createElement("th", null, "Appointment Notes")
                                   ), 
                                   React.createElement("tbody", null, details)
                              )
                         )
                    )
               )
          )
     }
});

var eachL
