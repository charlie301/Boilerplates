/* ============================================================================
               NOT PRODUCTION CODE -
               TEMPLATE TO ASSIST IN INTERGRATING REACT INTO PROJECTS
==============================================================================*/

//******************************************************************************
//        THIS IS MAIN REACT CONTAINER THAT HOLDS ALL THE SUBCOMPONENETS
//******************************************************************************

var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

//Broswerify will compile these imported JSX files into here requiring only
var AptList = require('./components/AptList');
var AddAppointment = require('./components/AddAppointment');


/* =============================================================================
               MAIN REACT COMPONENT
==============================================================================*/

var MainInterface = React.createClass({

  //Sets the intial state of componenet
  getInitialState: function() {
    return {
      myAppointments: [],
      aptBodyVisible: false
    } //return
  }, //getInitialState

  //Executed once on componenet creation before render
  componentDidMount: function() {
    //Ajax Request and set state
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempApts = result;
      this.setState({
        myAppointments: tempApts
      }); //setState
    }.bind(this));
  },

  //Carried out at end of life before component is removed
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  //Added into
  deleteMessage: function(item){
       console.log(item);
       var allApts = this.state.myAppointments;
       var newApts = _.without(allApts, item);
       /* this.state.myAppointments = newApts <---- WRONG - YOU CANNOT directly
          change state!
          RIGHT = this.setState({ <data> }) */
       this.setState({
            myAppointments: newApts
       });
 },

//Passed from child component
 toggleDisplay: function(){
     var tempVisible = !this.state.aptBodyVisible;
     this.setState({
          aptBodyVisible: tempVisible
     });
},

//Passed from the child container
addItem: function(tempItem){
     var tempApts = this.state.myAppointments;
     tempApts.push(tempItem);
     this.setState =({
          myAppointments: tempApts
     })
},

  /*=======================
   Main Render function */

  render: function() {
    var filteredApts = this.state.myAppointments;
    filteredApts = filteredApts.map(function(item, index) {
      return(
           //Sub components information - this is the props
           <AptList key = {index}
                    currentObject = {item}
                    onDelete = {this.deleteMessage}
                    />
      ) //return
    }.bind(this)); //filteredApts.map
    return (
      <div className="interface">
        <AddAppointment
             bodyVisible = {this.state.aptBodyVisible}
             handleToggle = {this.toggleDisplay}
             addApt = {this.addItem}
             />
        <ul className="item-list media-list">{filteredApts}</ul>
      </div>
    ) //return
  } //render
}); //MainInterface

/* The render return function contains 2 components! AptList maps a seperate
   component and holds result in filteredApts variable, allowing reference
   using only brackets on render {filteredApts} <-- line 87 */

/* Proceess above for render^
   1. Ajaxed JSON data is mapped into AptList component with index and onbject
   2. This is returned and referenced just below.

/* =============================================================================
                    LIST COMPONENT   <!-- Placed in seperate componenets folder
==============================================================================*/

/* Sub component listing *Note it does not have access to main conponent state
var AptList = React.createClass({
     render: function(){
          return(
               <li className="pet-item media">
                 <div className="pet-info media-body">
                   <div className="pet-head">
                     <span className="pet-name">{this.props.object.petName}</span>
                     <span className="apt-date pull-right">{this.props.object.aptDate}</span>
                   </div>
                   <div className="owner-name"><span className="label-item">Owner:</span>
                   {this.props.object.ownerName}</div>
                   <div className="apt-notes">{this.props.object.aptNotes}</div>
                 </div>
               </li>
          )//render return
     }
}); */

//Renders main componenet to the DOM
ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
); //render
